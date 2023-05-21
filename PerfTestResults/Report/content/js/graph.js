/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 133.0, "minX": 0.0, "maxY": 28972.0, "series": [{"data": [[0.0, 133.0], [0.1, 133.0], [0.2, 133.0], [0.3, 133.0], [0.4, 133.0], [0.5, 133.0], [0.6, 133.0], [0.7, 133.0], [0.8, 133.0], [0.9, 133.0], [1.0, 134.0], [1.1, 134.0], [1.2, 134.0], [1.3, 134.0], [1.4, 134.0], [1.5, 134.0], [1.6, 134.0], [1.7, 134.0], [1.8, 134.0], [1.9, 134.0], [2.0, 134.0], [2.1, 135.0], [2.2, 135.0], [2.3, 135.0], [2.4, 135.0], [2.5, 135.0], [2.6, 135.0], [2.7, 135.0], [2.8, 135.0], [2.9, 135.0], [3.0, 135.0], [3.1, 135.0], [3.2, 135.0], [3.3, 135.0], [3.4, 135.0], [3.5, 135.0], [3.6, 135.0], [3.7, 135.0], [3.8, 135.0], [3.9, 135.0], [4.0, 135.0], [4.1, 135.0], [4.2, 136.0], [4.3, 136.0], [4.4, 136.0], [4.5, 136.0], [4.6, 136.0], [4.7, 136.0], [4.8, 136.0], [4.9, 136.0], [5.0, 136.0], [5.1, 136.0], [5.2, 136.0], [5.3, 136.0], [5.4, 136.0], [5.5, 136.0], [5.6, 136.0], [5.7, 136.0], [5.8, 136.0], [5.9, 136.0], [6.0, 136.0], [6.1, 136.0], [6.2, 137.0], [6.3, 137.0], [6.4, 137.0], [6.5, 137.0], [6.6, 137.0], [6.7, 137.0], [6.8, 137.0], [6.9, 137.0], [7.0, 137.0], [7.1, 137.0], [7.2, 137.0], [7.3, 137.0], [7.4, 137.0], [7.5, 137.0], [7.6, 137.0], [7.7, 137.0], [7.8, 137.0], [7.9, 137.0], [8.0, 137.0], [8.1, 137.0], [8.2, 137.0], [8.3, 138.0], [8.4, 138.0], [8.5, 138.0], [8.6, 138.0], [8.7, 138.0], [8.8, 138.0], [8.9, 138.0], [9.0, 138.0], [9.1, 138.0], [9.2, 138.0], [9.3, 138.0], [9.4, 138.0], [9.5, 138.0], [9.6, 138.0], [9.7, 138.0], [9.8, 138.0], [9.9, 138.0], [10.0, 138.0], [10.1, 138.0], [10.2, 139.0], [10.3, 139.0], [10.4, 139.0], [10.5, 139.0], [10.6, 139.0], [10.7, 139.0], [10.8, 139.0], [10.9, 139.0], [11.0, 139.0], [11.1, 139.0], [11.2, 139.0], [11.3, 139.0], [11.4, 139.0], [11.5, 139.0], [11.6, 139.0], [11.7, 139.0], [11.8, 139.0], [11.9, 139.0], [12.0, 139.0], [12.1, 139.0], [12.2, 139.0], [12.3, 139.0], [12.4, 139.0], [12.5, 139.0], [12.6, 139.0], [12.7, 139.0], [12.8, 139.0], [12.9, 139.0], [13.0, 139.0], [13.1, 140.0], [13.2, 140.0], [13.3, 140.0], [13.4, 140.0], [13.5, 140.0], [13.6, 140.0], [13.7, 140.0], [13.8, 140.0], [13.9, 140.0], [14.0, 140.0], [14.1, 140.0], [14.2, 140.0], [14.3, 140.0], [14.4, 140.0], [14.5, 140.0], [14.6, 140.0], [14.7, 140.0], [14.8, 140.0], [14.9, 140.0], [15.0, 140.0], [15.1, 140.0], [15.2, 140.0], [15.3, 140.0], [15.4, 140.0], [15.5, 140.0], [15.6, 140.0], [15.7, 140.0], [15.8, 140.0], [15.9, 140.0], [16.0, 141.0], [16.1, 141.0], [16.2, 141.0], [16.3, 141.0], [16.4, 141.0], [16.5, 141.0], [16.6, 141.0], [16.7, 141.0], [16.8, 141.0], [16.9, 141.0], [17.0, 141.0], [17.1, 141.0], [17.2, 141.0], [17.3, 141.0], [17.4, 141.0], [17.5, 141.0], [17.6, 141.0], [17.7, 142.0], [17.8, 142.0], [17.9, 142.0], [18.0, 142.0], [18.1, 142.0], [18.2, 142.0], [18.3, 142.0], [18.4, 142.0], [18.5, 142.0], [18.6, 143.0], [18.7, 143.0], [18.8, 143.0], [18.9, 143.0], [19.0, 143.0], [19.1, 143.0], [19.2, 143.0], [19.3, 143.0], [19.4, 143.0], [19.5, 143.0], [19.6, 143.0], [19.7, 144.0], [19.8, 144.0], [19.9, 144.0], [20.0, 144.0], [20.1, 144.0], [20.2, 145.0], [20.3, 145.0], [20.4, 145.0], [20.5, 145.0], [20.6, 145.0], [20.7, 145.0], [20.8, 145.0], [20.9, 145.0], [21.0, 146.0], [21.1, 146.0], [21.2, 146.0], [21.3, 146.0], [21.4, 146.0], [21.5, 146.0], [21.6, 146.0], [21.7, 146.0], [21.8, 146.0], [21.9, 146.0], [22.0, 146.0], [22.1, 147.0], [22.2, 147.0], [22.3, 147.0], [22.4, 147.0], [22.5, 147.0], [22.6, 147.0], [22.7, 147.0], [22.8, 148.0], [22.9, 148.0], [23.0, 148.0], [23.1, 148.0], [23.2, 148.0], [23.3, 148.0], [23.4, 148.0], [23.5, 148.0], [23.6, 149.0], [23.7, 149.0], [23.8, 149.0], [23.9, 149.0], [24.0, 150.0], [24.1, 150.0], [24.2, 150.0], [24.3, 150.0], [24.4, 150.0], [24.5, 151.0], [24.6, 151.0], [24.7, 151.0], [24.8, 151.0], [24.9, 151.0], [25.0, 151.0], [25.1, 151.0], [25.2, 151.0], [25.3, 152.0], [25.4, 152.0], [25.5, 152.0], [25.6, 152.0], [25.7, 152.0], [25.8, 152.0], [25.9, 152.0], [26.0, 153.0], [26.1, 153.0], [26.2, 153.0], [26.3, 153.0], [26.4, 154.0], [26.5, 154.0], [26.6, 154.0], [26.7, 155.0], [26.8, 155.0], [26.9, 155.0], [27.0, 155.0], [27.1, 155.0], [27.2, 155.0], [27.3, 155.0], [27.4, 156.0], [27.5, 156.0], [27.6, 156.0], [27.7, 156.0], [27.8, 156.0], [27.9, 156.0], [28.0, 156.0], [28.1, 156.0], [28.2, 156.0], [28.3, 156.0], [28.4, 156.0], [28.5, 157.0], [28.6, 157.0], [28.7, 157.0], [28.8, 157.0], [28.9, 157.0], [29.0, 157.0], [29.1, 157.0], [29.2, 157.0], [29.3, 157.0], [29.4, 158.0], [29.5, 158.0], [29.6, 158.0], [29.7, 158.0], [29.8, 158.0], [29.9, 158.0], [30.0, 158.0], [30.1, 159.0], [30.2, 159.0], [30.3, 159.0], [30.4, 159.0], [30.5, 159.0], [30.6, 159.0], [30.7, 160.0], [30.8, 160.0], [30.9, 160.0], [31.0, 161.0], [31.1, 161.0], [31.2, 161.0], [31.3, 162.0], [31.4, 162.0], [31.5, 163.0], [31.6, 163.0], [31.7, 163.0], [31.8, 164.0], [31.9, 164.0], [32.0, 165.0], [32.1, 165.0], [32.2, 165.0], [32.3, 165.0], [32.4, 166.0], [32.5, 166.0], [32.6, 166.0], [32.7, 166.0], [32.8, 166.0], [32.9, 166.0], [33.0, 167.0], [33.1, 167.0], [33.2, 167.0], [33.3, 167.0], [33.4, 167.0], [33.5, 168.0], [33.6, 168.0], [33.7, 168.0], [33.8, 168.0], [33.9, 168.0], [34.0, 168.0], [34.1, 169.0], [34.2, 170.0], [34.3, 170.0], [34.4, 170.0], [34.5, 170.0], [34.6, 170.0], [34.7, 170.0], [34.8, 170.0], [34.9, 171.0], [35.0, 171.0], [35.1, 171.0], [35.2, 172.0], [35.3, 172.0], [35.4, 172.0], [35.5, 172.0], [35.6, 172.0], [35.7, 172.0], [35.8, 172.0], [35.9, 173.0], [36.0, 173.0], [36.1, 173.0], [36.2, 174.0], [36.3, 174.0], [36.4, 174.0], [36.5, 175.0], [36.6, 175.0], [36.7, 175.0], [36.8, 176.0], [36.9, 176.0], [37.0, 176.0], [37.1, 176.0], [37.2, 178.0], [37.3, 178.0], [37.4, 178.0], [37.5, 179.0], [37.6, 179.0], [37.7, 179.0], [37.8, 180.0], [37.9, 180.0], [38.0, 180.0], [38.1, 180.0], [38.2, 181.0], [38.3, 182.0], [38.4, 182.0], [38.5, 182.0], [38.6, 182.0], [38.7, 184.0], [38.8, 184.0], [38.9, 184.0], [39.0, 185.0], [39.1, 185.0], [39.2, 186.0], [39.3, 186.0], [39.4, 186.0], [39.5, 186.0], [39.6, 187.0], [39.7, 187.0], [39.8, 187.0], [39.9, 187.0], [40.0, 188.0], [40.1, 188.0], [40.2, 189.0], [40.3, 189.0], [40.4, 189.0], [40.5, 190.0], [40.6, 190.0], [40.7, 190.0], [40.8, 191.0], [40.9, 191.0], [41.0, 191.0], [41.1, 191.0], [41.2, 192.0], [41.3, 192.0], [41.4, 192.0], [41.5, 192.0], [41.6, 192.0], [41.7, 193.0], [41.8, 193.0], [41.9, 193.0], [42.0, 193.0], [42.1, 194.0], [42.2, 195.0], [42.3, 195.0], [42.4, 195.0], [42.5, 197.0], [42.6, 197.0], [42.7, 198.0], [42.8, 199.0], [42.9, 199.0], [43.0, 200.0], [43.1, 201.0], [43.2, 202.0], [43.3, 202.0], [43.4, 203.0], [43.5, 204.0], [43.6, 204.0], [43.7, 205.0], [43.8, 205.0], [43.9, 205.0], [44.0, 206.0], [44.1, 206.0], [44.2, 206.0], [44.3, 206.0], [44.4, 206.0], [44.5, 207.0], [44.6, 207.0], [44.7, 207.0], [44.8, 207.0], [44.9, 207.0], [45.0, 207.0], [45.1, 208.0], [45.2, 208.0], [45.3, 208.0], [45.4, 208.0], [45.5, 208.0], [45.6, 208.0], [45.7, 209.0], [45.8, 209.0], [45.9, 209.0], [46.0, 210.0], [46.1, 210.0], [46.2, 210.0], [46.3, 211.0], [46.4, 211.0], [46.5, 211.0], [46.6, 212.0], [46.7, 212.0], [46.8, 212.0], [46.9, 213.0], [47.0, 214.0], [47.1, 214.0], [47.2, 215.0], [47.3, 216.0], [47.4, 216.0], [47.5, 216.0], [47.6, 218.0], [47.7, 218.0], [47.8, 218.0], [47.9, 219.0], [48.0, 219.0], [48.1, 220.0], [48.2, 221.0], [48.3, 221.0], [48.4, 222.0], [48.5, 223.0], [48.6, 223.0], [48.7, 224.0], [48.8, 225.0], [48.9, 225.0], [49.0, 227.0], [49.1, 227.0], [49.2, 228.0], [49.3, 228.0], [49.4, 229.0], [49.5, 230.0], [49.6, 230.0], [49.7, 232.0], [49.8, 232.0], [49.9, 233.0], [50.0, 234.0], [50.1, 234.0], [50.2, 235.0], [50.3, 235.0], [50.4, 235.0], [50.5, 236.0], [50.6, 238.0], [50.7, 238.0], [50.8, 239.0], [50.9, 240.0], [51.0, 240.0], [51.1, 241.0], [51.2, 241.0], [51.3, 241.0], [51.4, 242.0], [51.5, 242.0], [51.6, 242.0], [51.7, 242.0], [51.8, 244.0], [51.9, 244.0], [52.0, 244.0], [52.1, 244.0], [52.2, 244.0], [52.3, 244.0], [52.4, 245.0], [52.5, 245.0], [52.6, 245.0], [52.7, 246.0], [52.8, 246.0], [52.9, 246.0], [53.0, 247.0], [53.1, 249.0], [53.2, 250.0], [53.3, 250.0], [53.4, 250.0], [53.5, 251.0], [53.6, 251.0], [53.7, 251.0], [53.8, 253.0], [53.9, 254.0], [54.0, 254.0], [54.1, 255.0], [54.2, 255.0], [54.3, 256.0], [54.4, 256.0], [54.5, 257.0], [54.6, 258.0], [54.7, 258.0], [54.8, 259.0], [54.9, 261.0], [55.0, 261.0], [55.1, 263.0], [55.2, 264.0], [55.3, 266.0], [55.4, 266.0], [55.5, 268.0], [55.6, 268.0], [55.7, 269.0], [55.8, 270.0], [55.9, 270.0], [56.0, 271.0], [56.1, 272.0], [56.2, 274.0], [56.3, 275.0], [56.4, 275.0], [56.5, 277.0], [56.6, 278.0], [56.7, 281.0], [56.8, 281.0], [56.9, 281.0], [57.0, 282.0], [57.1, 284.0], [57.2, 284.0], [57.3, 286.0], [57.4, 286.0], [57.5, 287.0], [57.6, 287.0], [57.7, 291.0], [57.8, 292.0], [57.9, 292.0], [58.0, 296.0], [58.1, 296.0], [58.2, 303.0], [58.3, 304.0], [58.4, 309.0], [58.5, 312.0], [58.6, 324.0], [58.7, 326.0], [58.8, 326.0], [58.9, 326.0], [59.0, 328.0], [59.1, 328.0], [59.2, 329.0], [59.3, 329.0], [59.4, 333.0], [59.5, 334.0], [59.6, 334.0], [59.7, 335.0], [59.8, 337.0], [59.9, 348.0], [60.0, 361.0], [60.1, 366.0], [60.2, 368.0], [60.3, 380.0], [60.4, 381.0], [60.5, 384.0], [60.6, 386.0], [60.7, 387.0], [60.8, 389.0], [60.9, 389.0], [61.0, 401.0], [61.1, 405.0], [61.2, 406.0], [61.3, 407.0], [61.4, 416.0], [61.5, 418.0], [61.6, 419.0], [61.7, 422.0], [61.8, 445.0], [61.9, 476.0], [62.0, 477.0], [62.1, 481.0], [62.2, 484.0], [62.3, 484.0], [62.4, 485.0], [62.5, 503.0], [62.6, 505.0], [62.7, 505.0], [62.8, 506.0], [62.9, 507.0], [63.0, 507.0], [63.1, 524.0], [63.2, 526.0], [63.3, 538.0], [63.4, 547.0], [63.5, 547.0], [63.6, 557.0], [63.7, 564.0], [63.8, 589.0], [63.9, 610.0], [64.0, 613.0], [64.1, 626.0], [64.2, 654.0], [64.3, 665.0], [64.4, 677.0], [64.5, 678.0], [64.6, 708.0], [64.7, 712.0], [64.8, 732.0], [64.9, 742.0], [65.0, 754.0], [65.1, 755.0], [65.2, 760.0], [65.3, 779.0], [65.4, 786.0], [65.5, 787.0], [65.6, 789.0], [65.7, 794.0], [65.8, 796.0], [65.9, 802.0], [66.0, 802.0], [66.1, 806.0], [66.2, 807.0], [66.3, 808.0], [66.4, 811.0], [66.5, 811.0], [66.6, 813.0], [66.7, 815.0], [66.8, 816.0], [66.9, 819.0], [67.0, 822.0], [67.1, 822.0], [67.2, 827.0], [67.3, 831.0], [67.4, 840.0], [67.5, 842.0], [67.6, 848.0], [67.7, 850.0], [67.8, 852.0], [67.9, 853.0], [68.0, 856.0], [68.1, 856.0], [68.2, 863.0], [68.3, 866.0], [68.4, 867.0], [68.5, 868.0], [68.6, 870.0], [68.7, 870.0], [68.8, 875.0], [68.9, 876.0], [69.0, 900.0], [69.1, 910.0], [69.2, 916.0], [69.3, 919.0], [69.4, 922.0], [69.5, 932.0], [69.6, 946.0], [69.7, 946.0], [69.8, 947.0], [69.9, 948.0], [70.0, 955.0], [70.1, 956.0], [70.2, 963.0], [70.3, 965.0], [70.4, 971.0], [70.5, 980.0], [70.6, 984.0], [70.7, 993.0], [70.8, 1025.0], [70.9, 1040.0], [71.0, 1052.0], [71.1, 1057.0], [71.2, 1059.0], [71.3, 1064.0], [71.4, 1065.0], [71.5, 1065.0], [71.6, 1066.0], [71.7, 1067.0], [71.8, 1068.0], [71.9, 1070.0], [72.0, 1070.0], [72.1, 1070.0], [72.2, 1071.0], [72.3, 1072.0], [72.4, 1074.0], [72.5, 1077.0], [72.6, 1084.0], [72.7, 1088.0], [72.8, 1089.0], [72.9, 1103.0], [73.0, 1106.0], [73.1, 1107.0], [73.2, 1114.0], [73.3, 1114.0], [73.4, 1120.0], [73.5, 1133.0], [73.6, 1143.0], [73.7, 1149.0], [73.8, 1150.0], [73.9, 1159.0], [74.0, 1161.0], [74.1, 1163.0], [74.2, 1166.0], [74.3, 1170.0], [74.4, 1180.0], [74.5, 1184.0], [74.6, 1185.0], [74.7, 1188.0], [74.8, 1193.0], [74.9, 1198.0], [75.0, 1207.0], [75.1, 1208.0], [75.2, 1212.0], [75.3, 1219.0], [75.4, 1227.0], [75.5, 1321.0], [75.6, 1434.0], [75.7, 1450.0], [75.8, 1505.0], [75.9, 1519.0], [76.0, 1539.0], [76.1, 1551.0], [76.2, 1614.0], [76.3, 1631.0], [76.4, 1633.0], [76.5, 1639.0], [76.6, 1654.0], [76.7, 1655.0], [76.8, 1662.0], [76.9, 1668.0], [77.0, 1671.0], [77.1, 1676.0], [77.2, 1682.0], [77.3, 1689.0], [77.4, 1690.0], [77.5, 1695.0], [77.6, 1776.0], [77.7, 1864.0], [77.8, 1875.0], [77.9, 1880.0], [78.0, 1880.0], [78.1, 1881.0], [78.2, 1882.0], [78.3, 1884.0], [78.4, 1885.0], [78.5, 1931.0], [78.6, 1958.0], [78.7, 1963.0], [78.8, 1966.0], [78.9, 1968.0], [79.0, 2133.0], [79.1, 2155.0], [79.2, 2275.0], [79.3, 2299.0], [79.4, 2336.0], [79.5, 2433.0], [79.6, 2442.0], [79.7, 2446.0], [79.8, 2460.0], [79.9, 2471.0], [80.0, 2867.0], [80.1, 2985.0], [80.2, 3072.0], [80.3, 3088.0], [80.4, 3097.0], [80.5, 3114.0], [80.6, 3117.0], [80.7, 3137.0], [80.8, 3141.0], [80.9, 3183.0], [81.0, 3210.0], [81.1, 3275.0], [81.2, 3294.0], [81.3, 3383.0], [81.4, 3547.0], [81.5, 3837.0], [81.6, 3873.0], [81.7, 3880.0], [81.8, 3979.0], [81.9, 4148.0], [82.0, 4220.0], [82.1, 4286.0], [82.2, 4313.0], [82.3, 4320.0], [82.4, 4323.0], [82.5, 4330.0], [82.6, 4443.0], [82.7, 4503.0], [82.8, 4503.0], [82.9, 4508.0], [83.0, 4540.0], [83.1, 4663.0], [83.2, 4685.0], [83.3, 4687.0], [83.4, 4687.0], [83.5, 4688.0], [83.6, 4705.0], [83.7, 4724.0], [83.8, 4732.0], [83.9, 4743.0], [84.0, 4775.0], [84.1, 5031.0], [84.2, 5397.0], [84.3, 5418.0], [84.4, 5506.0], [84.5, 5521.0], [84.6, 5525.0], [84.7, 5539.0], [84.8, 5555.0], [84.9, 5567.0], [85.0, 5581.0], [85.1, 5585.0], [85.2, 5618.0], [85.3, 5619.0], [85.4, 5634.0], [85.5, 5641.0], [85.6, 5645.0], [85.7, 5667.0], [85.8, 5672.0], [85.9, 5733.0], [86.0, 5800.0], [86.1, 5816.0], [86.2, 5840.0], [86.3, 5895.0], [86.4, 5948.0], [86.5, 5968.0], [86.6, 5993.0], [86.7, 5995.0], [86.8, 6003.0], [86.9, 6066.0], [87.0, 6145.0], [87.1, 6211.0], [87.2, 6236.0], [87.3, 6255.0], [87.4, 6279.0], [87.5, 6296.0], [87.6, 6303.0], [87.7, 6330.0], [87.8, 6357.0], [87.9, 6432.0], [88.0, 6494.0], [88.1, 6530.0], [88.2, 6558.0], [88.3, 6569.0], [88.4, 6704.0], [88.5, 6712.0], [88.6, 6765.0], [88.7, 6806.0], [88.8, 6902.0], [88.9, 7045.0], [89.0, 7059.0], [89.1, 7087.0], [89.2, 7142.0], [89.3, 7201.0], [89.4, 7429.0], [89.5, 7601.0], [89.6, 7675.0], [89.7, 7692.0], [89.8, 7805.0], [89.9, 8178.0], [90.0, 21007.0], [90.1, 21019.0], [90.2, 21021.0], [90.3, 21026.0], [90.4, 21030.0], [90.5, 21036.0], [90.6, 21038.0], [90.7, 21041.0], [90.8, 21042.0], [90.9, 21044.0], [91.0, 21046.0], [91.1, 21047.0], [91.2, 21048.0], [91.3, 21056.0], [91.4, 21057.0], [91.5, 21058.0], [91.6, 21058.0], [91.7, 21060.0], [91.8, 21061.0], [91.9, 21063.0], [92.0, 21064.0], [92.1, 21066.0], [92.2, 21066.0], [92.3, 21067.0], [92.4, 21068.0], [92.5, 21068.0], [92.6, 21069.0], [92.7, 21071.0], [92.8, 21072.0], [92.9, 21074.0], [93.0, 21075.0], [93.1, 21076.0], [93.2, 21077.0], [93.3, 21077.0], [93.4, 21078.0], [93.5, 21080.0], [93.6, 21080.0], [93.7, 21081.0], [93.8, 21083.0], [93.9, 21083.0], [94.0, 21083.0], [94.1, 21084.0], [94.2, 21084.0], [94.3, 21088.0], [94.4, 21088.0], [94.5, 21089.0], [94.6, 21091.0], [94.7, 21093.0], [94.8, 21093.0], [94.9, 21094.0], [95.0, 21096.0], [95.1, 21103.0], [95.2, 21112.0], [95.3, 21112.0], [95.4, 21113.0], [95.5, 21113.0], [95.6, 21120.0], [95.7, 21121.0], [95.8, 21121.0], [95.9, 21123.0], [96.0, 21126.0], [96.1, 21127.0], [96.2, 21127.0], [96.3, 21127.0], [96.4, 21128.0], [96.5, 21129.0], [96.6, 21134.0], [96.7, 21135.0], [96.8, 21135.0], [96.9, 21137.0], [97.0, 21138.0], [97.1, 21139.0], [97.2, 21140.0], [97.3, 21145.0], [97.4, 21147.0], [97.5, 21157.0], [97.6, 21169.0], [97.7, 21206.0], [97.8, 21217.0], [97.9, 21223.0], [98.0, 21257.0], [98.1, 21308.0], [98.2, 21310.0], [98.3, 21433.0], [98.4, 21433.0], [98.5, 21444.0], [98.6, 21447.0], [98.7, 21453.0], [98.8, 21453.0], [98.9, 21456.0], [99.0, 21457.0], [99.1, 21458.0], [99.2, 21460.0], [99.3, 21460.0], [99.4, 21461.0], [99.5, 21464.0], [99.6, 21466.0], [99.7, 21467.0], [99.8, 27915.0], [99.9, 28972.0]], "isOverall": false, "label": "https://www.n11.com/arama?q=insider", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 430.0, "series": [{"data": [[600.0, 7.0], [700.0, 13.0], [800.0, 32.0], [900.0, 18.0], [1000.0, 21.0], [1100.0, 21.0], [1200.0, 5.0], [1300.0, 1.0], [1400.0, 2.0], [1500.0, 4.0], [1600.0, 14.0], [1700.0, 1.0], [1800.0, 8.0], [1900.0, 5.0], [2100.0, 2.0], [2200.0, 2.0], [2300.0, 1.0], [2400.0, 5.0], [2800.0, 1.0], [2900.0, 1.0], [3000.0, 3.0], [3100.0, 5.0], [3200.0, 3.0], [3300.0, 1.0], [3500.0, 1.0], [3800.0, 3.0], [3900.0, 1.0], [4300.0, 4.0], [4100.0, 1.0], [4200.0, 2.0], [4500.0, 4.0], [4400.0, 1.0], [4600.0, 5.0], [4700.0, 5.0], [5000.0, 1.0], [5300.0, 1.0], [5500.0, 8.0], [5600.0, 7.0], [5400.0, 1.0], [5700.0, 1.0], [5800.0, 4.0], [5900.0, 4.0], [6000.0, 2.0], [6100.0, 1.0], [6200.0, 5.0], [6300.0, 3.0], [6500.0, 3.0], [6400.0, 2.0], [6800.0, 1.0], [6700.0, 3.0], [6900.0, 1.0], [7000.0, 3.0], [7100.0, 1.0], [7200.0, 1.0], [7400.0, 1.0], [7600.0, 3.0], [7800.0, 1.0], [8100.0, 1.0], [21000.0, 51.0], [21100.0, 26.0], [21300.0, 2.0], [21200.0, 4.0], [21400.0, 15.0], [100.0, 430.0], [27900.0, 1.0], [28900.0, 1.0], [200.0, 151.0], [300.0, 28.0], [400.0, 15.0], [500.0, 14.0]], "isOverall": false, "label": "https://www.n11.com/arama?q=insider", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 28900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 624.0, "series": [{"data": [[0.0, 624.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 134.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 142.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 100.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 123.80399999999979, "minX": 1.68467982E12, "maxY": 123.80399999999979, "series": [{"data": [[1.68467982E12, 123.80399999999979]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68467982E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 133.0, "minX": 1.0, "maxY": 18087.857142857145, "series": [{"data": [[2.0, 9679.833333333332], [3.0, 134.0], [4.0, 138.75], [5.0, 138.0], [6.0, 135.0], [7.0, 142.0], [8.0, 136.0], [9.0, 138.0], [10.0, 1286.5], [11.0, 140.0], [12.0, 140.0], [13.0, 504.83333333333337], [14.0, 142.0], [15.0, 136.0], [16.0, 137.0], [17.0, 137.2], [18.0, 136.0], [19.0, 146.4], [20.0, 135.83333333333334], [21.0, 140.0], [22.0, 158.5], [23.0, 158.5], [24.0, 148.0], [25.0, 148.0], [26.0, 148.0], [27.0, 144.0], [28.0, 142.0], [29.0, 144.0], [30.0, 137.5], [31.0, 1012.0], [33.0, 329.0], [32.0, 863.3333333333333], [35.0, 1395.35], [34.0, 157.0], [37.0, 214.0], [36.0, 209.0], [39.0, 217.66666666666666], [38.0, 215.0], [41.0, 164.25], [40.0, 1459.1666666666667], [43.0, 168.0], [42.0, 166.0], [45.0, 234.66666666666669], [44.0, 220.5], [47.0, 869.5], [46.0, 208.0], [49.0, 667.8571428571428], [48.0, 185.0], [51.0, 245.0], [50.0, 238.11111111111111], [53.0, 269.0], [52.0, 257.5], [55.0, 551.05], [54.0, 735.5], [57.0, 693.5], [56.0, 144.5], [59.0, 742.2], [58.0, 1205.4285714285713], [61.0, 157.0], [60.0, 156.0], [63.0, 146.0], [67.0, 425.5], [66.0, 465.57142857142856], [65.0, 244.0], [64.0, 272.5], [71.0, 527.0], [70.0, 430.4444444444445], [69.0, 144.0], [68.0, 144.0], [75.0, 423.25], [74.0, 366.42857142857144], [73.0, 250.72727272727272], [72.0, 167.0], [79.0, 189.0], [78.0, 188.0], [77.0, 189.0], [76.0, 478.33333333333337], [83.0, 9723.981481481484], [82.0, 191.0], [81.0, 192.0], [80.0, 688.0], [87.0, 208.0], [86.0, 211.5], [85.0, 274.85714285714283], [84.0, 12683.8], [91.0, 146.0], [90.0, 148.5], [89.0, 5312.833333333334], [88.0, 332.6666666666667], [95.0, 17597.833333333332], [94.0, 154.16666666666666], [92.0, 14586.535714285714], [99.0, 6315.714285714285], [98.0, 496.5], [97.0, 18087.857142857145], [96.0, 13303.249999999998], [103.0, 136.0], [102.0, 143.0], [101.0, 140.0], [100.0, 11490.80357142857], [107.0, 142.0], [106.0, 139.0], [105.0, 139.0], [104.0, 137.0], [111.0, 134.0], [110.0, 137.0], [109.0, 135.0], [108.0, 138.5], [115.0, 152.25], [114.0, 135.0], [113.0, 136.5], [112.0, 156.5], [119.0, 153.0], [118.0, 140.0], [117.0, 147.5], [116.0, 154.8], [123.0, 139.0], [122.0, 140.5], [121.0, 133.0], [120.0, 135.0], [127.0, 136.0], [126.0, 139.0], [125.0, 137.0], [124.0, 136.5], [131.0, 139.0], [128.0, 136.0], [143.0, 145.0], [151.0, 193.0], [150.0, 190.5], [149.0, 160.5], [148.0, 186.5], [146.0, 183.0], [144.0, 145.0], [158.0, 141.33333333333334], [157.0, 151.0], [156.0, 148.0], [155.0, 153.0], [154.0, 146.5], [153.0, 184.0], [152.0, 195.5], [167.0, 180.5], [166.0, 158.5], [164.0, 143.0], [163.0, 181.0], [173.0, 4569.7692307692305], [175.0, 207.5], [172.0, 186.0], [171.0, 168.0], [170.0, 676.0], [169.0, 168.0], [183.0, 140.0], [182.0, 151.0], [181.0, 252.23529411764704], [180.0, 240.0], [179.0, 386.28571428571433], [178.0, 180.66666666666666], [177.0, 171.0], [176.0, 176.5], [191.0, 1175.904761904762], [190.0, 296.50000000000006], [189.0, 240.57142857142858], [192.0, 192.15384615384613], [193.0, 2717.071428571429], [197.0, 1202.5], [196.0, 3643.425531914894], [195.0, 816.6930693069305], [194.0, 2743.1666666666665], [200.0, 2328.8717948717945], [1.0, 309.75]], "isOverall": false, "label": "https://www.n11.com/arama?q=insider", "isController": false}, {"data": [[123.80399999999979, 2981.9799999999996]], "isOverall": false, "label": "https://www.n11.com/arama?q=insider-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 47700.0, "minX": 1.68467982E12, "maxY": 948334.2666666667, "series": [{"data": [[1.68467982E12, 948334.2666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68467982E12, 47700.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68467982E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2981.9799999999996, "minX": 1.68467982E12, "maxY": 2981.9799999999996, "series": [{"data": [[1.68467982E12, 2981.9799999999996]], "isOverall": false, "label": "https://www.n11.com/arama?q=insider", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68467982E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 740.8350000000002, "minX": 1.68467982E12, "maxY": 740.8350000000002, "series": [{"data": [[1.68467982E12, 740.8350000000002]], "isOverall": false, "label": "https://www.n11.com/arama?q=insider", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68467982E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 2632.207999999999, "minX": 1.68467982E12, "maxY": 2632.207999999999, "series": [{"data": [[1.68467982E12, 2632.207999999999]], "isOverall": false, "label": "https://www.n11.com/arama?q=insider", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68467982E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 133.0, "minX": 1.68467982E12, "maxY": 8178.0, "series": [{"data": [[1.68467982E12, 8178.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68467982E12, 3207.2999999999993]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68467982E12, 7086.72]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68467982E12, 5640.65]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68467982E12, 133.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68467982E12, 207.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68467982E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 135.0, "minX": 1.0, "maxY": 28972.0, "series": [{"data": [[140.0, 244.0], [146.0, 295.0], [38.0, 407.0], [48.0, 173.0], [15.0, 4724.0], [4.0, 140.0], [71.0, 141.0], [5.0, 135.0], [89.0, 144.0], [104.0, 208.0], [106.0, 223.5], [111.0, 207.5], [116.0, 2926.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 27915.0], [140.0, 21113.0], [38.0, 21090.0], [5.0, 28972.0], [6.0, 21036.0], [111.0, 21139.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 146.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4452.0, "series": [{"data": [[140.0, 242.0], [146.0, 226.0], [38.0, 339.5], [48.0, 170.5], [15.0, 4452.0], [4.0, 138.0], [71.0, 139.0], [5.0, 132.0], [89.0, 139.0], [104.0, 195.0], [106.0, 222.0], [111.0, 204.5], [116.0, 2247.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0], [140.0, 0.0], [38.0, 0.0], [5.0, 0.0], [6.0, 0.0], [111.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 146.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.68467982E12, "maxY": 16.666666666666668, "series": [{"data": [[1.68467982E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68467982E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.68467982E12, "maxY": 15.0, "series": [{"data": [[1.68467982E12, 15.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.68467982E12, 1.6333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.68467982E12, 0.03333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.ConnectTimeoutException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68467982E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.68467982E12, "maxY": 15.0, "series": [{"data": [[1.68467982E12, 15.0]], "isOverall": false, "label": "https://www.n11.com/arama?q=insider-success", "isController": false}, {"data": [[1.68467982E12, 1.6666666666666667]], "isOverall": false, "label": "https://www.n11.com/arama?q=insider-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68467982E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.68467982E12, "maxY": 15.0, "series": [{"data": [[1.68467982E12, 15.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.68467982E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68467982E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

