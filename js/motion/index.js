/*global $:false, jQuery:false, console:false */
var isis = isis || {};
$( document ).ready( function( $ ) {
	var socket = io.connect( 'http://build.kiwiwearables.com:8080' );

    var thingToCheck = 'whisk';
	var checkMotion = true;
    var thisMotion;

	var motionDetected = function( motion ) {

		if ( motion.detectArrayCounter >= motion.bufferSize ) {

			// Tell the user what they did, track it, etc.

//			$( '.knob' ).val( 10 ).trigger( 'change' );

			console.log( motion.name );
			motion.domCount.val(parseInt( motion.domCount.val() ) + 1).trigger('change');
            //motion.domCount.trigger('change');

			checkMotion = false;

			setTimeout( function() {
				motion.detectArrayCounter = 0;
				checkMotion = true;
//					$('#detect').toggleClass("detect-off");
			}, motion.timeBetweenMotions );
		}

	};

    $.each(motionData, function(index, motion) {
        motion.domThreshold = $( '#' + motion.name + ' .threshold');
        motion.domBuffer = $( '#' + motion.name + ' .buffer');
        motion.domScore = $( '#' + motion.name + ' .score');
        motion.domCount = $( 'article.panel-' + motion.name + ' .knob');

        motion.domBuffer.text( motion.bufferSize );
        motion.domThreshold.text( motion.threshold );
    });

	socket.on( 'connect', function() {
		socket.emit( 'listen', { device_id: '44', password: '123' } );
	} );

	socket.on( 'listen_response', function( data ) {
		var kiwi_data = JSON.parse( data.message );
		var dtw, total, thisMotion;
		//console.log( kiwi_data );

        thisMotion = false;

        $.each(motionData, function(index, motion) {
            if (motion.name == isis.activePanel) {
                thisMotion = motion;
                return;
            }
        });
		//for ( var i = 0; i < motionData.length; i++ ) {

		//	thisMotion = motionData[i];

        if (!thisMotion)
            return;

			dtw = DTW( kiwi_data, thisMotion );
			total = dtw.total;
            thisMotion.domScore.text( total );

			if ( thisMotion.greaterThan ) {
				if ( total >= thisMotion.threshold && checkMotion ) {
					thisMotion.detectArrayCounter++;
					motionDetected( thisMotion );
				}
			}
			else {
				if ( total <= thisMotion.threshold && checkMotion ) {
					thisMotion.detectArrayCounter++;
					motionDetected( thisMotion );
				}
			}

		//}

//		console.log(kiwi_data); // Kiwi sensor data is a JSON object

//		var packet_type = kiwi_data.packet_type;

	// Capture accelerometer and gyroscope data, or tap motion events
	// 00 = raw sensor data
	// 03 = motion events

	} );

} );
