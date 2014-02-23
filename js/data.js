
var motionData = [
	{
		name: 'knead',
		threshold: 36,
		bufferSize: 30,
		greaterThan: false,
		timeBetweenMotions: 500,
		detectArrayCounter: 0,
        inputs: {
            sumA: [],
            sumG: []
        },
		sumA: [1.1279296875,1.1533203125,1.125,1.0986328125,1.1103515625,1.12109375,1.1162109375,1.0810546875,1.0947265625,1.0947265625,1.1044921875,1.1328125,1.1328125,1.1259765625,1.3505859375,1.3671875,1.3505859375,1.3525390625,1.4111328125,1.4111328125,1.3681640625,0.80078125,2.0048828125,1.1572265625,1.23046875,1.1142578125,1.3017578125,0.6171875,1.3662109375,1.3544921875,1.3662109375,1.3896484375,1.3779296875,1.3896484375,1.4775390625,1.4775390625,1.505859375,1.4921875,1.39453125,1.47265625,1.408203125,1.3623046875,1.3623046875,1.3369140625,1.341796875,1.3310546875,1.3369140625,1.376953125,1.375,1.3798828125,1.361328125,1.34765625,1.35546875,1.3623046875,1.3759765625,1.359375,1.359375,1.3662109375,1.3544921875,1.3466796875,1.3486328125,1.365234375,1.3486328125,1.3720703125,1.37109375,1.3525390625,1.3720703125,1.3916015625,1.37109375,1.3916015625,1.3740234375,1.36328125,1.35546875,1.373046875,1.3583984375,1.3583984375,1.3857421875,1.3876953125,1.3671875,1.37109375,1.3671875,1.365234375,1.3525390625,1.3671875,1.3681640625,1.3779296875,1.3662109375,1.3662109375,1.3623046875,1.3671875,1.3828125,1.373046875,1.37109375,1.439453125,1.37109375,1.376953125,1.3876953125,1.37109375,1.4248046875,1.51171875,1.453125,1.3564453125,1.2333984375,1.15234375,1.15234375,1.3935546875,1.3857421875,1.4794921875,1.404296875,1.5146484375,1.3935546875,1.5390625,1.4150390625,1.56640625,1.7607421875,1.43359375,1.1318359375,1.232421875,1.3359375,1.3408203125,1.37109375,1.3408203125,1.587890625,1.30859375,1.294921875,1.4560546875,1.259765625,1.2412109375,1.3017578125,1.3251953125,1.361328125,1.7060546875,1.392578125,1,1.3203125,1.412109375,1.1962890625,1.259765625,0.9638671875,1.01171875,1.234375,0.7578125,0.888671875,0.9716796875,1.013671875,0.93359375,0.93359375,0.93359375,0.9853515625,1.0146484375,1.03125,1.0751953125,1.1103515625,0.9130859375,1.1103515625,0.759765625,0.8369140625,0.9033203125,0.810546875,0.9267578125,0.810546875,0.849609375,0.90234375,1.078125,0.650390625,0.8369140625,1.5029296875,0.908203125,1.1513671875,1.189453125,1.189453125,1.162109375,1.05859375,1.3046875,1.3046875,1.2216796875,1.1708984375,1.17578125,1.150390625,1.1865234375,1.212890625,1.2255859375,1.1591796875,1.169921875,1.181640625,1.19140625,1.193359375,1.2021484375,1.19921875,1.2021484375,1.2021484375,1.1650390625,1.1865234375,1.1884765625,1.1904296875,1.17578125,1.1787109375,1.193359375,1.185546875,1.193359375,1.1845703125,1.1943359375,1.193359375,1.193359375,1.1904296875,1.1787109375,1.181640625,1.185546875,1.1748046875,1.1923828125,1.166015625,1.1923828125,1.1376953125,1.048828125,1.0927734375,1.08984375,1.107421875,1.072265625,0.98046875,1.2041015625,1.4951171875,1.505859375,1.505859375,1.66015625,1.490234375,1.5703125,1.4033203125,1.3974609375,1.365234375,1.4453125,1.4443359375,1.1806640625,1.1142578125,1.1337890625,1.1142578125,1.1298828125,1.1142578125,1.0966796875,1.158203125,1.1318359375,1.091796875,1.1240234375,1.1474609375,1.1474609375,1.1279296875,1.2216796875,1.2216796875,1.1298828125,1.048828125,1.1005859375,0.939453125,1.099609375,1.0068359375,1.0068359375,0.7841796875,0.765625,0.546875,0.53515625,0.546875,0.578125,0.521484375,0.7607421875,0.7138671875,0.958984375,0.7138671875,1.1787109375,1.1083984375,0.9794921875,1.083984375,1.04296875,0.9482421875,0.8291015625,0.9453125,1.0703125,2.6376953125,0.6953125,0.6953125,0.6953125,0.74609375,1.51171875,1.3154296875,0.990234375,0.9208984375,1.2119140625,1.2578125,1.134765625,1.171875,1.3212890625,1.12109375,1.18359375,1.171875,1.205078125,1.162109375,1.1748046875,1.1748046875,1.1708984375,1.185546875,1.1474609375,1.05078125,1.169921875,1.1708984375,1.2158203125,1.1650390625,1.1796875,1.15234375,1.1630859375,1.1875,1.158203125,1.1875,1.1875,1.181640625,1.1826171875,1.1787109375,1.19140625,1.1728515625,1.1591796875,1.17578125,1.1796875,1.166015625,1.1845703125,1.1708984375,1.1884765625,1.1767578125,1.1806640625,1.171875,1.1650390625,1.1796875,1.0556640625,1.1748046875,1.1767578125,1.1220703125,1.1376953125,1.158203125,1.3349609375,1.4638671875,1.51953125,1.4765625,1.4873046875,1.353515625,1.294921875,1.4921875,1.4873046875,1.3720703125,1.1435546875,1.1748046875,1.1435546875,1.1435546875,1.2236328125,1.0888671875,1.1787109375,1.2392578125,1.2373046875,1.1318359375,0.98046875,1.1015625,0.9658203125,1.08203125,0.9970703125,0.8603515625,0.787109375,0.85546875,0.623046875,0.59765625,0.5732421875,0.2587890625,0.26953125,0.529296875,0.25,0.599609375,0.625,1.0986328125,1.0986328125,0.88671875,1.0400390625,1.2802734375,1.1689453125,1.189453125,1.076171875,1.0771484375,0.9443359375,1.07421875,1.0126953125,0.9619140625,0.7919921875,0.865234375,0.8017578125,0.8017578125,-0.4375,6.5322265625,0.5615234375,0.7890625,1.9052734375,1.01171875,1.3681640625,0.8671875,1.0615234375,1.1904296875,1.1904296875,1.09765625,1.1201171875,1.0673828125,1.1484375,1.0673828125,1.099609375,1.11328125,1.12109375,1.10009765625,1.111328125,1.1142578125,1.125,1.12109375,1.1279296875,1.1259765625,1.1318359375,1.134765625,1.1259765625,1.1455078125,1.130859375,1.15625,1.138671875,1.1259765625,1.1162109375,1.146484375,1.134765625,1.146484375,1.1435546875,1.1298828125,1.146484375,1.146484375,1.1376953125,1.1328125,1.134765625,1.15234375,1.123046875,1.1494140625,1.123046875,1.146484375,1.1416015625,1.1396484375,1.1181640625,1.158203125,1.1171875,1.150390625,1.1142578125,1.1357421875,1.1181640625,1.130859375,1.1240234375,1.1240234375,1.1328125,1.142578125,1.138671875,1.1484375,1.1318359375,1.103515625,1.119140625,1.123046875,1.123046875,1.1142578125,1.1201171875,1.1455078125,1.1611328125,1.087890625,1.099609375,1.099609375,1.12890625,1.11328125,1.353515625,1.353515625,1.388671875,1.642578125,1.1845703125,1.2294921875,1.37109375,1.8193359375,1.8076171875,1.4453125,1.037109375,1.3740234375,1.1220703125,1.556640625,1.2578125,1.18359375,1.421875,1.2548828125,1.3623046875,1.3623046875,1.5732421875,1.2861328125,1.1044921875,1.15625,1.111328125,1.15625,1.1650390625,1.291015625,0.9814453125,0.9814453125,1.1953125,1.3076171875,1.306640625,1.306640625,1.3486328125,1.3076171875,1.2802734375,1.2685546875,1.1337890625,1.3291015625,1.123046875,1.0087890625,0.9892578125,0.998046875,0.9150390625,1.14453125,0.947265625,0.970703125,0.9296875,0.8447265625,0.9013671875,0.958984375,-0.0205078125,0.4482421875,1.3564453125,1.8076171875,1.1103515625,1.267578125,1.1962890625,1.162109375,1.2890625,1.185546875,1.2001953125,1.1865234375,1.2001953125,1.1767578125,1.1806640625,1.1806640625,1.16015625,1.1796875,1.177734375,1.1669921875,1.181640625,1.17578125,1.193359375,1.185546875,1.1640625,1.1640625,1.173828125,1.1708984375,1.166015625,1.18359375,1.185546875,1.18359375,1.169921875,1.1630859375,1.1767578125,1.1767578125,1.1787109375,1.1630859375,1.1630859375,1.1630859375,1.1796875,1.1796875,1.171875,1.1796875,1.1748046875,1.169921875,1.181640625,1.1767578125,1.1787109375,1.17578125,1.17578125,1.158203125,1.169921875,1.1796875,1.177734375,1.1640625,1.1689453125,1.1689453125,1.169921875,1.17578125,1.17578125,1.1767578125,1.1708984375,1.154296875,1.1708984375,1.1728515625,1.1650390625,1.171875,1.1572265625,1.1630859375,1.16015625,1.1767578125,1.087890625,1.15625,1.1640625,1.28515625,1.279296875,1.12890625,1.201171875,1.2919921875,1.318359375,1.2919921875,1.3828125,1.384765625,1.35546875,1.3349609375,1.3173828125,1.30859375,1.4052734375,1.365234375,1.3369140625,1.26171875,1.126953125,1.26171875,1.0009765625,1.0263671875,0.9365234375,0.9365234375,0.7900390625,0.7900390625,1.3056640625,1.28125,1.0771484375,1.04296875,1.1376953125,1.1513671875,1.2060546875,1.19140625,1.1513671875,1.0224609375,1.0703125,1.0703125,0.955078125,0.857421875,0.8359375,0.6240234375,0.7978515625,0.7109375,0.650390625,0.595703125,0.9482421875,0.8544921875,0.9013671875,1.189453125,1.2529296875,1.2412109375,1.240234375,1.1435546875,1.2412109375,1,1.0654296875,1.08203125,0.689453125,0.634765625,0.634765625,1.916015625,6.421875,-0.4287109375,1.4599609375,0.2412109375,1.2529296875,1.1005859375,1.1123046875,1.1123046875,1.1630859375,1.150390625,1.0810546875,1.125,1.0810546875,1.1572265625,1.1044921875,1.1484375,1.1162109375,1.1171875,1.13671875,1.142578125,1.1416015625,1.1279296875,1.03125,1.13671875,1.1416015625,1.146484375,1.12890625,1.1376953125,1.130859375,1.140625,1.134765625,1.1298828125,1.140625,1.1328125,1.142578125,1.150390625,1.1484375,1.13671875,1.1357421875,1.1474609375,1.1240234375,1.13671875,1.1396484375,1.1455078125,1.12890625,1.140625,1.12890625,1.13671875,1.1328125,1.1396484375,1.1337890625,1.1357421875,1.1396484375,1.140625,1.1328125,1.1357421875,1.1298828125,1.138671875,1.126953125,1.1416015625,1.1376953125,1.1162109375,1.0341796875,1.185546875,1.0986328125,1.3310546875,1.232421875,1.1162109375,1.1787109375,1.484375,1.255859375,1.3369140625,1.375,1.5947265625,1.689453125,1.404296875,1.55859375,1.2744140625,1.4755859375,1.1318359375,1.291015625,1.3408203125,1.2900390625,1.1591796875,1.23828125,1.1767578125,1.283203125,1.2197265625,1.2412109375,1.126953125,1.318359375,1.2412109375,1.126953125,1.0693359375,1.1943359375,1.0146484375,0.875,1.037109375,0.87109375,0.8388671875,1.04296875,0.9296875,0.724609375,0.8232421875,0.9296875,0.6220703125,0.607421875,0.55078125,0.40234375,0.5546875,0.6318359375,1.099609375,0.958984375,0.5341796875,1.01953125,1.1376953125,1.201171875,1.26171875,1.26171875,1.2451171875,1.2861328125,1.068359375,1.1376953125,1.322265625,1.1318359375,0.9541015625,1.0126953125,1.0595703125,1.0048828125,0.9970703125,1.22265625,1.384765625,1.1103515625,1.5810546875,1.015625,1.3759765625,1.3759765625,1.2685546875,1.2783203125,1.3056640625,1.3056640625,1.2470703125,1.2646484375,1.2509765625,1.267578125,1.25390625,1.2568359375,1.2626953125,1.2431640625,1.275390625,1.2548828125,1.2490234375,1.25,1.2548828125,1.2685546875,1.26171875,1.24609375,1.25390625,1.25,1.2578125,1.2578125,1.2607421875,1.2529296875,1.2529296875,1.2666015625,1.275390625],
		sumG: [-6.44,-6.58,-2.1,3.57,12.53,13.86,7.14,1.4,21.91,21.91,37.45,53.48,53.48,61.11,29.47,51.1,29.47,5.53,7,-13.86,-4.9,-25.9,-76.93,-26.18,-10.08,-12.81,-8.19,-10.08,18.55,26.81,18.55,34.93,37.24,34.93,18.2,18.2,8.33,6.65,-9.45,-0.28,-5.6,-13.86,-13.86,-13.02,-7.49,-3.29,9.24,15.75,16.73,-7.35,-8.61,0.14,-8.26,-4.34,-2.87,0.07,0.07,0.98,1.68,2.87,2.1,1.54,2.1,1.89,3.01,2.8,1.89,4.97,5.81,4.97,2.38,0.98,1.12,3.22,0.77,0.77,0.91,-1.19,-3.57,-1.54,-1.61,1.54,0.84,-1.61,1.96,1.96,2.17,2.17,1.05,3.08,-15.82,6.79,5.39,6.58,5.39,0.98,8.68,5.39,12.25,-1.61,-29.47,-76.16,-107.94,-2.03,-2.03,17.57,-2.87,-43.61,-31.36,-53.2,-27.51,26.25,5.53,-10.22,-41.37,-0.56,220.22,85.4,359.59,253.54,244.86,253.54,341.18,274.68,268.59,260.12,275.94,296.31,258.93,194.95,186.97,215.88,172.48,162.82,127.05,39.69,24.57,-37.24,-42.14,-46.27,-78.12,-180.6,-154.42,-144.34,-166.18,-206.85,-323.19,-323.19,-315,-278.81,-73.15,-154.77,-45.15,-22.96,-45.15,18.41,90.58,104.16,82.81,91.35,82.81,73.08,68.04,53.76,70.98,36.75,-32.83,33.18,-37.59,-49.7,-49.7,-34.16,-3.43,11.62,11.62,9.52,8.61,4.97,6.44,4.13,-0.07,1.75,3.15,3.5,1.54,-2.38,-3.99,3.99,2.45,3.99,3.99,4.48,-4.27,0.56,5.18,3.85,0.7,-1.47,0.7,-1.47,2.45,2.94,0.7,0.7,2.87,3.71,0.77,2.03,3.01,0,3.36,2.17,10.92,33.32,23.17,45.15,61.88,83.93,124.11,199.85,169.68,184.87,184.87,136.85,114.1,125.37,57.33,89.88,24.92,90.23,75.11,31.08,136.15,144.41,136.15,62.72,136.15,199.01,108.36,164.64,111.3,133.98,133.49,133.49,132.37,111.16,111.16,119.63,113.4,152.88,143.57,21.63,65.8,65.8,-40.53,-83.09,-126.77,-181.37,-126.77,-107.17,-231.63,-285.18,-311.43,-280.84,-311.43,-264.67,-252.21,-192.36,-132.65,64.05,54.32,59.92,69.02,80.15,-92.75,39.55,39.55,39.55,17.43,-15.05,7,-32.83,-23.52,9.8,-9.73,11.41,1.96,9.17,-0.07,2.45,1.75,0.77,1.89,-3.71,-3.71,3.57,0.49,0.91,0.91,0.28,3.57,0.7,0.49,0.42,2.94,-0.42,0.63,1.05,3.01,3.01,3.92,-0.28,3.5,0.56,3.01,1.47,0.63,-0.35,1.75,1.4,2.45,1.61,2.73,1.05,2.17,0.49,1.54,21.63,0.63,0.42,100.73,67.41,79.38,163.8,250.46,180.46,139.65,77.49,23.17,180.32,40.95,77.49,152.25,206.64,207.48,206.64,206.64,184.73,169.68,164.64,154.28,136.78,201.39,164.36,162.54,128.73,130.83,152.11,134.68,5.32,101.08,-24.36,-60.34,1.19,-89.6,-150.22,-240.17,-94.01,-301,-268.1,-371.35,-371.35,-317.1,-312.69,-187.25,-243.81,-162.68,-105.91,-48.65,26.88,22.82,33.88,32.06,59.78,82.11,112.84,112.84,20.93,-627.76,16.1,57.89,34.65,22.89,36.33,26.39,19.95,11.06,11.06,-19.95,-20.51,-12.39,-13.79,-12.39,-14.63,-5.39,0.91,0.91,0,2.31,2.73,-0.21,3.78,-2.17,-7.7,-9.45,0.91,2.52,-3.36,5.18,3.43,6.16,4.27,2.38,1.75,0.56,1.26,1.82,1.33,1.33,2.94,0.84,4.48,-0.7,2.03,-0.77,2.03,-0.7,1.19,2.45,2.1,2.45,-1.82,-0.98,-0.98,1.33,0.7,1.33,1.61,1.61,1.89,1.12,1.68,0.35,-1.33,4.76,2.38,9.38,9.38,6.16,12.74,18.48,14.98,29.82,60.48,60.48,68.18,82.67,117.18,117.18,87.01,12.11,14.91,53.34,82.39,89.39,80.57,77.77,213.29,145.32,298.55,276.71,121.59,162.47,152.74,158.2,115.43,115.43,81.62,77.63,230.3,0.41999999999999,-30.1,0.41999999999999,-75.74,-257.88,-371.49,-371.49,-379.33,-359.87,-354.97,-354.97,-262.22,-135.73,-83.23,-60.48,-34.72,-108.71,-34.93,-3.92,97.72,94.43,97.51,97.02,54.67,103.53,103.67,107.52,91.56,-456.47,-11.97,174.09,-13.09,-20.3,-37.17,23.03,16.03,10.57,19.67,-4.69,0.98,1.26,0.98,1.12,2.38,2.38,5.67,6.65,1.33,-1.68,-2.31,-3.22,-1.75,-1.47,-0.07,-0.07,-5.5511151231258E-17,1.4,3.22,3.85,1.89,2.45,-2.52,-5.39,-3.92,-3.01,-1.68,3.64,3.64,3.64,0.7,2.87,2.73,1.75,-0.7,1.33,-0.84,-1.05,-1.33,2.1,-1.75,0.07,0.7,1.19,0.91,0.56,-0.14,-0.14,0.91,-0.63,-0.63,-0.77,-1.26,0.56,-0.63,3.01,1.19,3.78,3.99,3.29,6.86,9.94,37.24,45.85,19.81,43.61,46.27,53.13,66.99,64.26,27.09,64.26,87.64,139.02,149.24,129.15,125.02,144.83,115.78,105.21,104.72,140.42,154.91,140.42,198.8,117.88,172.48,172.48,223.58,223.58,175.77,123.48,117.6,130.2,143.01,113.68,126.35,95.55,113.68,20.23,34.86,34.86,-27.37,-27.23,-35.56,-134.47,-63.49,-207.9,-170.38,-262.71,-384.72,-343.35,-245,-249.27,-204.12,-107.59,-74.76,-37.66,-107.59,1.89,-14.07,-14.21,29.33,96.18,96.18,88.83,-339.29,-63,54.88,52.99,9.66,23.24,-24.43,-24.43,-19.53,-17.08,1.4,-4.97,1.4,14.77,12.81,9.52,0.42,0.49,-0.56,-0.21,0.07,5.39,5.39,2.31,1.61,0.49,1.26,0.7,-1.68,1.54,0.98,-0.84,-0.14,-0.49,-1.68,-0.7,2.52,1.12,-1.68,-0.14,-0.77,0.21,-1.19,-1.61,-0.42,1.4,1.12,1.12,1.33,1.82,2.52,0.28,0.28,-0.35,-0.56,-2.45,-2.66,-1.54,-0.91,-1.54,-0.63,2.45,97.3,159.95,74.55,167.65,164.29,124.53,172.83,146.16,166.11,148.61,154,157.5,145.39,110.88,116.97,75.6,88.27,95.06,188.93,168.07,188.79,187.39,182.77,180.11,172.13,193.41,153.65,142.59,184.17,153.65,142.59,223.65,197.54,213.5,205.73,108.22,89.53,187.74,91.14,44.52,-11.27,16.31,44.52,-32.69,-72.59,-98.56,-130.97,-168.28,-240.31,-160.16,-239.33,-305.97,-236.46,-217.77,-122.29,-32.9,-32.9,-101.08,-4.2,28.84,58.17,68.67,63.35,38.99,44.45,37.59,30.17,30.8,30.59,-14.98,-35.14,-27.37,-43.12,4.06,4.06,-1.82,5.04,7.42,7.42,2.31,1.96,0.7,0,1.19,2.38,2.87,0.84,4.34,-0.77,-0.14,2.1,-0.77,0.21,1.89,1.33,-1.12,2.66,3.29,3.29,2.24,1.47,1.47,1.96,0.77]
	},
	{
		name: 'roll',
		threshold: 2.5,
		bufferSize: 20,
		greaterThan: true,
		timeBetweenMotions: 500,
		detectArrayCounter: 0,
        inputs: {
            sumA: [],
            sumG: []
        },
		sumA: [1.5263671875,1.5341796875,1.5419921875,1.525390625,1.490234375,1.5166015625,1.490234375,1.50390625,1.47265625,1.50390625,1.4619140625,1.50390625,1.5087890625,1.55078125,1.6083984375,1.5869140625,1.48046875,1.63671875,1.4736328125,1.4736328125,1.7646484375,1.7548828125,1.6494140625,1.673828125,1.701171875,2.19140625,1.755859375,1.3642578125,1.4248046875,1.41015625,1.4375,1.453125,0.9365234375,1.275390625,1.05078125,1.015625,1.1279296875,0.98046875,0.986328125,1.09765625,1.1083984375,1.1591796875,1.1064453125,1.1806640625,1.0888671875,1.0693359375,0.9931640625,1.138671875,1.3134765625,1.2744140625,1.263671875,1.2646484375,1.5185546875,1.53125,1.439453125,1.67578125,1.5234375,1.5009765625,1.60546875,1.60546875,1.53125,1.5107421875,1.578125,1.6396484375,1.5986328125,1.6669921875,1.6435546875,1.6533203125,1.6796875,1.6328125,1.58203125,1.6328125,1.5341796875,1.62109375,1.7001953125,1.7001953125,1.6767578125,1.6533203125,1.6083984375],
		sumG: [-1.33,0,0.14,0.7,1.89,1.05,1.89,-1.26,0.42,-1.26,3.01,-0.77,6.93,7.28,7.56,8.05,-5.67,3.64,-8.82,-8.82,-13.44,-21.91,-49.42,-54.25,-61.53,-75.46,-182.63,-30.94,-70.91,-48.37,-52.99,-55.23,-39.2,-67.97,-31.78,-38.92,-7.35,-1.54,0.14,9.52,9.73,-2.94,7.91,-2.59,3.99,0.070000000000007,11.76,54.18,41.02,35.28,51.31,41.3,29.19,37.38,17.57,32.69,29.4,34.86,34.02,34.02,44.38,56.28,60.55,15.33,45.92,7.35,13.79,24.5,27.51,6.93,7.98,6.93,14.42,-4.69,-12.32,-12.32,-14.07,-7.77,-1.54]
	},
	{
		name: 'whisk',
		threshold: 9,
		bufferSize: 10,
		greaterThan: true,
		timeBetweenMotions: 500,
		detectArrayCounter: 0,
        inputs: {
            sumA: [],
            sumG: []
        },
		sumA: [0.590820313,0.435546875,0.189453125,0.158203125,0.30859375,0.345703125,0.376953125,0.630859375,0.760742188,0.630859375,0.709960938,0.709960938,0.720703126,0.814453125,0.782226562,0.674804688,0.814453125,0.555664063,0.462890625,0.608398438,0.5234375,0.452148438],
		sumG: [150.57,136.85,151.76,169.19,128.1,44.1,20.09,-28.7,-67.41,-28.7,-150.15,-150.15,-180.88,-249.48,-207.76,-243.53,-249.48,-184.94,-90.79,23.94,96.74,97.72]
	},
	{
		name: 'chop',
		threshold: 2.5,
		bufferSize: 10,
		greaterThan: true,
		timeBetweenMotions: 500,
		detectArrayCounter: 0,
        inputs: {
            sumA: [],
            sumG: []
        },
		sumA: [1.5517578125,1.5478515625,1.5625,1.58203125,1.5625,1.57421875,1.5771484375,1.564453125,1.564453125,1.576171875,1.5107421875,1.6884765625,1.578125,1.4755859375,1.814453125,1.7880859375,2.0087890625,2.115234375,1.748046875,1.91796875,1.708984375,1.67578125,1.640625,1.640625,1.693359375,1.4267578125,1.4267578125,1.3271484375,1.357421875,1.1943359375,1.291015625,1.1396484375,1.3271484375,1.216796875,1.5341796875,1.81640625,1.6904296875,1.68359375,1.81640625,1.4658203125,1.68359375,1.37109375,0.916015625,4.1279296875,4.1279296875,3.0419921875,1.5146484375,1.6962890625,1.591796875,1.509765625,1.6220703125,1.494140625,1.5546875,1.509765625,1.509765625,1.5703125],
		sumG: [-0.42,-1.75,0.63,1.47,-0.91,-0.42,-0.84,0.77,0.77,1.05,15.89,51.03,58.03,39.06,31.36,23.59,37.66,28.56,8.82,11.55,9.03,-44.73,-57.82,-57.82,-57.47,-9.94,-9.94,21.63,0.56,11.2,-1.26,19.74,21.63,14.14,-26.11,8.82,-5.18,21.14,8.82,-3.64,21.14,-4.76,40.39,-95.9,-95.9,4.62,-110.81,24.15,27.16,-10.92,-6.23,-6.16,-16.31,-10.92,8.26,0.14]
	},
	{
		name: 'sift',
		threshold: 10,
		bufferSize: 10,
		greaterThan: true,
		timeBetweenMotions: 500,
		detectArrayCounter: 0,
        inputs: {
            sumA: [],
            sumG: []
        },
		sumA: [1.3046875,1.3037109375,1.31640625,1.310546875,1.3046875,1.310546875,1.2783203125,1.2783203125,1.296875,1.3095703125,1.3173828125,1.287109375,1.2998046875,1.2958984375,1.2880859375,1.3076171875,1.3935546875,1.3935546875,1.451171875,1.4130859375,1.48828125,1.345703125,1.5087890625,1.3642578125,1.1982421875,1.2265625,1.27734375,1.3583984375,1.2236328125,1.2177734375,1.115234375,1.1220703125,1.0869140625,1.1044921875,1.0927734375,1.1376953125,1.1591796875,1.1318359375,1.119140625,1.1298828125,1.12890625,1.296875,1.1025390625,1.296875,1.34375,1.2890625,1.2607421875,1.392578125,1.4140625,1.4140625,1.3291015625,1.3046875,1.310546875,1.310546875,1.234375],
		sumG: [2.31,1.68,4.2,2.73,2.31,-0.35,1.68,1.68,3.85,1.19,1.89,0.7,0.63,3.71,3.22,1.82,-16.03,-16.03,-26.46,-87.01,-67.76,-98.84,-44.38,-112.63,-153.79,-152.81,-147.35,-129.92,-154.77,-156.38,-113.47,-102.83,-96.25,-37.87,-66.64,-8.19,12.6,32.97,59.15,85.96,153.02,167.44,171.85,167.44,144.9,154.98,178.57,20.58,35.28,35.28,10.29,-7.77,-2.1,-2.1,-1.05]
	}
];
