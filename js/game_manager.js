function GameManager(size, InputManager, Actuator, ScoreManager) {
  this.size         = size; // Size of the grid
  this.inputManager = new InputManager;
  this.scoreManager = new ScoreManager;
  this.actuator     = new Actuator;

  this.startTiles   = 1;

  this.inputManager.on("move", this.move.bind(this));
  this.inputManager.on("restart", this.restart.bind(this));
  this.inputManager.on("keepPlaying", this.keepPlaying.bind(this));

  this.setup();
}

// Restart the game
GameManager.prototype.restart = function () {
  this.actuator.continue();
  this.setup();
};

// Keep playing after winning
GameManager.prototype.keepPlaying = function () {
  this.keepPlaying = true;
  this.actuator.continue();
};

GameManager.prototype.isGameTerminated = function () {
  if (this.over || (this.won && !this.keepPlaying)) {
    return true;
  } else {
    return false;
  }
};

// Set up the game
GameManager.prototype.setup = function () {
  this.grid        = new Grid(this.size);

  this.score       = 0;
  this.over        = false;
  this.won         = false;
  this.keepPlaying = false;

  // Add the initial tiles
  this.addStartTiles();

  // Update the actuator
  this.actuate();
};

// Set up the initial tiles to start the game with
GameManager.prototype.addStartTiles = function () {
  for (var i = 0; i < this.startTiles; i++) {
    this.addRandomTile();
  }
};

// Adds a tile in a random position
GameManager.prototype.addRandomTile = function () {
  if (this.grid.cellsAvailable()) {
    var value = Math.random() < 0.999999991666666666666666666 ? Math.random() < 0.99999999090909090909090909 ? Math.random() < 0.99999999 ? Math.random() < 0.9999999888888888888888888 ? Math.random() < 0.9999999875 ? Math.random() < 0.9999999857142857142857142 ? Math.random() < 0.99999998333333333333333333 ? Math.random() < 0.99999998 ? Math.random() < 0.999999975 ? Math.random() < 0.9999999666666666666666666 ? Math.random() < 0.99999996 ? Math.random() < 0.99999995 ? Math.random() < 0.9999999 ? Math.random() < 0.999999 ? Math.random() < 0.99999888888888888888888 ? Math.random() < 0.99999875 ? Math.random() < 0.99999857142857142857142 ? Math.random() < 0.999998333333333333333333 ? Math.random() < 0.999998 ? Math.random() < 0.9999975 ? Math.random() < 0.99999666666666666666666 ? Math.random() < 0.999995 ? Math.random() < 0.99999 ? Math.random() < 0.99899899899899899899 ? Math.random() < 0.998 ? Math.random() < 0.9975 ? Math.random() < 0.99749373433583959899 ? Math.random() < 0.99748743718592964824 ? Math.random() < 0.99748110831234256926 ? Math.random() < 0.99747474747474747474 ? Math.random() < 0.99746835443037974683 ? Math.random() < 0.99746192893401015228 ? Math.random() < 0.99745547073791348600 ? Math.random() < 0.997448979591836734693 ? Math.random() < 0.99744245524296675191 ? Math.random() < 0.99743589743589743589 ? Math.random() < 0.99742930591259640102 ? Math.random() < 0.99742268041237113402 ? Math.random() < 0.99741602067183462532 ? Math.random() < 0.99740932642487046632 ? Math.random() < 0.99740259740259740259 ? Math.random() < 0.9973958333333333333333333 ? Math.random() < 0.99738903394255874673 ? Math.random() < 0.99738219895287958115 ? Math.random() < 0.99737532808398950131 ? Math.random() < 0.99736842105263157894 ? Math.random() < 0.99736147757255936675 ? Math.random() < 0.99735449735449735449 ? Math.random() < 0.99734748010610079575 ? Math.random() < 0.99734042553191489361 ? Math.random() < 0.997333333333333333333 ? Math.random() < 0.99732620320855614973 ? Math.random() < 0.99731903485254691689 ? Math.random() < 0.99731182795698924731 ? Math.random() < 0.99730458221024258760 ? Math.random() < 0.99729729729729729729 ? Math.random() < 0.99728997289972899728 ? Math.random() < 0.99728260869565217391 ? Math.random() < 0.99727520435967302452 ? Math.random() < 0.99726775956284153005 ? Math.random() < 0.99726027397260273972 ? Math.random() < 0.99725274725274725274 ? Math.random() < 0.997245179063360881542 ? Math.random() < 0.99723756906077348066 ? Math.random() < 0.99722991689750692520 ? Math.random() < 0.997222222222222222222 ? Math.random() < 0.99721448467966573816 ? Math.random() < 0.99720670391061452513 ? Math.random() < 0.99719887955182072829 ? Math.random() < 0.99719101123595505617 ? Math.random() < 0.99718309859154929577 ? Math.random() < 0.99717514124293785310 ? Math.random() < 0.99716713881019830028 ? Math.random() < 0.99715909090909090909090 ? Math.random() < 0.99715099715099715099 ? Math.random() < 0.99714285714285714285 ? Math.random() < 0.99713467048710601719 ? Math.random() < 0.99712643678160919540 ? Math.random() < 0.99711815561959654178 ? Math.random() < 0.99710982658959537572 ? Math.random() < 0.99710144927536231884 ? Math.random() < 0.99709302325581395348 ? Math.random() < 0.99708454810495626822 ? Math.random() < 0.99707602339181286549 ? Math.random() < 0.99706744868035190615 ? Math.random() < 0.99705882352941176470 ? Math.random() < 0.99705014749262536873 ? Math.random() < 0.99704142011834319526 ? Math.random() < 0.99703264094955489614 ? Math.random() < 0.9970238095238095238095 ? Math.random() < 0.99701492537313432835 ? Math.random() < 0.99700598802395209580 ? Math.random() < 0.99699699699699699699 ? Math.random() < 0.99698795180722891566 ? Math.random() < 0.99697885196374622356 ? Math.random() < 0.99696969696969696969 ? Math.random() < 0.99696048632218844984 ? Math.random() < 0.996951219512195121951 ? Math.random() < 0.99694189602446483180 ? Math.random() < 0.99693251533742331288 ? Math.random() < 0.99692307692307692307 ? Math.random() < 0.99691358024691358024 ? Math.random() < 0.99690402476780185758 ? Math.random() < 0.99689440993788819875 ? Math.random() < 0.99688473520249221183 ? Math.random() < 0.996875 ? Math.random() < 0.99686520376175548589 ? Math.random() < 0.99685534591194968553 ? Math.random() < 0.99684542586750788643 ? Math.random() < 0.99683544303797468354 ? Math.random() < 0.99682539682539682539 ? Math.random() < 0.99681528662420382165 ? Math.random() < 0.99680511182108626198 ? Math.random() < 0.996794871794871794871 ? Math.random() < 0.99678456591639871382 ? Math.random() < 0.99677419354838709677 ? Math.random() < 0.99676375404530744336 ? Math.random() < 0.99675324675324675324 ? Math.random() < 0.99674267100977198697 ? Math.random() < 0.99673202614379084967 ? Math.random() < 0.99672131147540983606 ? Math.random() < 0.99671052631578947368 ? Math.random() < 0.99669966996699669966 ? Math.random() < 0.99668874172185430463 ? Math.random() < 0.99667774086378737541 ? Math.random() < 0.99666666666666666666 ? Math.random() < 0.99665551839464882943 ? Math.random() < 0.99664429530201342281 ? Math.random() < 0.99663299663299663299 ? Math.random() < 0.996621621621621621621 ? Math.random() < 0.99661016949152542372 ? Math.random() < 0.99659863945578231292 ? Math.random() < 0.99658703071672354948 ? Math.random() < 0.99657534246575342465 ? Math.random() < 0.99656357388316151202 ? Math.random() < 0.99655172413793103448 ? Math.random() < 0.99653979238754325259 ? Math.random() < 0.99652777777777777777777 ? Math.random() < 0.99651567944250871080 ? Math.random() < 0.99650349650349650349 ? Math.random() < 0.99649122807017543859 ? Math.random() < 0.99647887323943661971 ? Math.random() < 0.99646643109540636042 ? Math.random() < 0.99645390070921985815 ? Math.random() < 0.99644128113879003558 ? Math.random() < 0.996428571428571428571 ? Math.random() < 0.99641577060931899641 ? Math.random() < 0.99640287769784172661 ? Math.random() < 0.99638989169675090252 ? Math.random() < 0.99637681159420289855 ? Math.random() < 0.99636363636363636363 ? Math.random() < 0.99635036496350364963 ? Math.random() < 0.99633699633699633699 ? Math.random() < 0.99632352941176470588 ? Math.random() < 0.99630996309963099630 ? Math.random() < 0.99629629629629629629 ? Math.random() < 0.99628252788104089219 ? Math.random() < 0.99626865671641791044 ? Math.random() < 0.99625468164794007490 ? Math.random() < 0.99624060150375939849 ? Math.random() < 0.99622641509433962264 ? Math.random() < 0.996212121212121212121 ? Math.random() < 0.99619771863117870722 ? Math.random() < 0.99618320610687022900 ? Math.random() < 0.99616858237547892720 ? Math.random() < 0.99615384615384615384 ? Math.random() < 0.99613899613899613899 ? Math.random() < 0.99612403100775193798 ? Math.random() < 0.99610894941634241245 ? Math.random() < 0.99609375 ? Math.random() < 0.99607843137254901960 ? Math.random() < 0.99606299212598425196 ? Math.random() < 0.99604743083003952569 ? Math.random() < 0.99603174603174603174 ? Math.random() < 0.99601593625498007968 ? Math.random() < 0.996 ? Math.random() < 0.99598393574297188755 ? Math.random() < 0.99596774193548387096 ? Math.random() < 0.99595141700404858299 ? Math.random() < 0.99593495934959349593 ? Math.random() < 0.99591836734693877551 ? Math.random() < 0.99590163934426229508 ? Math.random() < 0.99588477366255144032 ? Math.random() < 0.9958677685950413223 ? Math.random() < 0.99585062240663900414 ? Math.random() < 0.9958333333333333333333 ? Math.random() < 0.99581589958158995815 ? Math.random() < 0.99579831932773109243 ? Math.random() < 0.99578059071729957805 ? Math.random() < 0.9957627118644067796 ? Math.random() < 0.99574468085106382978 ? Math.random() < 0.99572649572649572649 ? Math.random() < 0.99570815450643776824 ? Math.random() < 0.99568965517241379310 ? Math.random() < 0.99567099567099567099 ? Math.random() < 0.99565217391304347826 ? Math.random() < 0.99563318777292576419 ? Math.random() < 0.99561403508771929824 ? Math.random() < 0.99559471365638766519 ? Math.random() < 0.99557522123893805309 ? Math.random() < 0.99555555555555555555 ? Math.random() < 0.99553571428571428571428 ? Math.random() < 0.99551569506726457399 ? Math.random() < 0.99549549549549549549 ? Math.random() < 0.99547511312217194570 ? Math.random() < 0.99545454545454545454 ? Math.random() < 0.99543378995433789954 ? Math.random() < 0.99541284403669724770 ? Math.random() < 0.99539170506912442396 ? Math.random() < 0.995370370370370370370 ? Math.random() < 0.99534883720930232558 ? Math.random() < 0.99532710280373831775 ? Math.random() < 0.99530516431924882629 ? Math.random() < 0.99528301886792452830 ? Math.random() < 0.99526066350710900473 ? Math.random() < 0.99523809523809523809 ? Math.random() < 0.99521531100478468899 ? Math.random() < 0.9951923076923076923076 ? Math.random() < 0.99516908212560386473 ? Math.random() < 0.99514563106796116504 ? Math.random() < 0.99512195121951219512 ? Math.random() < 0.99509803921568627450 ? Math.random() < 0.99507389162561576354 ? Math.random() < 0.99504950495049504950 ? Math.random() < 0.99502487562189054726 ? Math.random() < 0.995 ? Math.random() < 0.99497487437185929648 ? Math.random() < 0.99494949494949494949 ? Math.random() < 0.99492385786802030456 ? Math.random() < 0.99489795918367346938 ? Math.random() < 0.99487179487179487179 ? Math.random() < 0.99484536082474226804 ? Math.random() < 0.99481865284974093264 ? Math.random() < 0.994791666666666666666666 ? Math.random() < 0.99476439790575916230 ? Math.random() < 0.99473684210526315789 ? Math.random() < 0.99470899470899470899 ? Math.random() < 0.99468085106382978723 ? Math.random() < 0.99465240641711229946 ? Math.random() < 0.99462365591397849462 ? Math.random() < 0.99459459459459459459 ? Math.random() < 0.99456521739130434782 ? Math.random() < 0.99453551912568306010 ? Math.random() < 0.99450549450549450549 ? Math.random() < 0.99447513812154696132 ? Math.random() < 0.99444444444444444444 ? Math.random() < 0.99441340782122905027 ? Math.random() < 0.99438202247191011235 ? Math.random() < 0.99435028248587570621 ? Math.random() < 0.9943181818181818181818 ? Math.random() < 0.99428571428571428571 ? Math.random() < 0.99425287356321839080 ? Math.random() < 0.99421965317919075144 ? Math.random() < 0.99418604651162790697 ? Math.random() < 0.99415204678362573099 ? Math.random() < 0.99411764705882352941 ? Math.random() < 0.99408284023668639053 ? Math.random() < 0.994047619047619047619 ? Math.random() < 0.99401197604790419161 ? Math.random() < 0.99397590361445783132 ? Math.random() < 0.99393939393939393939 ? Math.random() < 0.99390243902439024390 ? Math.random() < 0.99386503067484662576 ? Math.random() < 0.99382716049382716049 ? Math.random() < 0.99378881987577639751 ? Math.random() < 0.99375 ? Math.random() < 0.99371069182389937106 ? Math.random() < 0.99367088607594936708 ? Math.random() < 0.99363057324840764331 ? Math.random() < 0.99358974358974358974 ? Math.random() < 0.99354838709677419354 ? Math.random() < 0.99350649350649350649 ? Math.random() < 0.99346405228758169934 ? Math.random() < 0.993421052631578947368 ? Math.random() < 0.99337748344370860927 ? Math.random() < 0.99333333333333333333 ? Math.random() < 0.99328859060402684563 ? Math.random() < 0.99324324324324324324 ? Math.random() < 0.99319727891156462585 ? Math.random() < 0.99315068493150684931 ? Math.random() < 0.99310344827586206896 ? Math.random() < 0.9930555555555555555555 ? Math.random() < 0.99300699300699300699 ? Math.random() < 0.99295774647887323943 ? Math.random() < 0.99290780141843971631 ? Math.random() < 0.99285714285714285714 ? Math.random() < 0.99280575539568345323 ? Math.random() < 0.99275362318840579710 ? Math.random() < 0.99270072992700729927 ? Math.random() < 0.99264705882352941176 ? Math.random() < 0.99259259259259259259 ? Math.random() < 0.99253731343283582089 ? Math.random() < 0.99248120300751879699 ? Math.random() < 0.99242424242424242424 ? Math.random() < 0.99236641221374045801 ? Math.random() < 0.99230769230769230769 ? Math.random() < 0.99224806201550387596 ? Math.random() < 0.9921875 ? Math.random() < 0.99212598425196850393 ? Math.random() < 0.99206349206349206349 ? Math.random() < 0.992 ? Math.random() < 0.99193548387096774193 ? Math.random() < 0.99186991869918699186 ? Math.random() < 0.99180327868852459016 ? Math.random() < 0.99173553719008264462 ? Math.random() < 0.991666666666666666666 ? Math.random() < 0.99159663865546218487 ? Math.random() < 0.99152542372881355932 ? Math.random() < 0.99145299145299145299 ? Math.random() < 0.99137931034482758620 ? Math.random() < 0.99130434782608695652 ? Math.random() < 0.99122807017543859649 ? Math.random() < 0.99115044247787610619 ? Math.random() < 0.9910714285714285714285 ? Math.random() < 0.99099099099099099099 ? Math.random() < 0.99090909090909090909 ? Math.random() < 0.99082568807339449541 ? Math.random() < 0.99074074074074074074 ? Math.random() < 0.99065420560747663551 ? Math.random() < 0.99056603773584905660 ? Math.random() < 0.99047619047619047619 ? Math.random() < 0.990384615384615384615 ? Math.random() < 0.99029126213592233009 ? Math.random() < 0.99019607843137254901 ? Math.random() < 0.99009900990099009900 ? Math.random() < 0.99 ? Math.random() < 0.9898989898989898989 ? Math.random() < 0.9897959183673469387 ? Math.random() < 0.9896907216494845360 ? Math.random() < 0.98958333333333333333333 ? Math.random() < 0.9894736842105263157 ? Math.random() < 0.9893617021276595744 ? Math.random() < 0.9892473118279569892 ? Math.random() < 0.9891304347826086956 ? Math.random() < 0.9890109890109890109 ? Math.random() < 0.9888888888888888888 ? Math.random() < 0.9887640449438202247 ? Math.random() < 0.988636363636363636363 ? Math.random() < 0.9885057471264367816 ? Math.random() < 0.9883720930232558139 ? Math.random() < 0.9882352941176470588 ? Math.random() < 0.98809523809523809523 ? Math.random() < 0.9879518072289156626 ? Math.random() < 0.9878048780487804878 ? Math.random() < 0.9876543209876543209 ? Math.random() < 0.9875 ? Math.random() < 0.9873417721518987341 ? Math.random() < 0.9871794871794871794 ? Math.random() < 0.9870129870129870129 ? Math.random() < 0.9868421052631578947 ? Math.random() < 0.98666666666666666666 ? Math.random() < 0.9864864864864864864 ? Math.random() < 0.9863013698630136986 ? Math.random() < 0.986111111111111111111 ? Math.random() < 0.9859154929577464788 ? Math.random() < 0.9857142857142857142 ? Math.random() < 0.9855072463768115942 ? Math.random() < 0.9858823529411764705 ? Math.random() < 0.9850746268656716417 ? Math.random() < 0.9848484848484848484 ? Math.random() < 0.9846153846153846153 ? Math.random() < 0.984375 ? Math.random() < 0.9841269841269841269 ? Math.random() < 0.9838709677419354838 ? Math.random() < 0.9836065573770491803 ? Math.random() < 0.98333333333333333333 ? Math.random() < 0.9830508474576271186 ? Math.random() < 0.9827586206896551724 ? Math.random() < 0.9824561403508771929 ? Math.random() < 0.982142857142857142857 ? Math.random() < 0.9818181818181818181 ? Math.random() < 0.9814814814814814814 ? Math.random() < 0.9811320754716981132 ? Math.random() < 0.98076923076923076923 ? Math.random() < 0.9803921568627450980 ? Math.random() < 0.98 ? Math.random() < 0.9795918367346938775 ? Math.random() < 0.9791666666666666666666 ? Math.random() < 0.9787234042553191489 ? Math.random() < 0.9782608695652173913 ? Math.random() < 0.9777777777777777777 ? Math.random() < 0.97727272727272727272 ? Math.random() < 0.9767441860465116279 ? Math.random() < 0.9761904761904761904 ? Math.random() < 0.9756097560975609756 ? Math.random() < 0.975 ? Math.random() < 0.9743589743589743589 ? Math.random() < 0.9736842105263157894 ? Math.random() < 0.9729729729729729729 ? Math.random() < 0.97222222222222222222 ? Math.random() < 0.9714285714285714285 ? Math.random() < 0.9705882352941176470 ? Math.random() < 0.9696969696969696969 ? Math.random() < 0.96875 ? Math.random() < 0.9677419354838709677 ? Math.random() < 0.9666666666666666666 ? Math.random() < 0.9655172413793103448 ? Math.random() < 0.96428571428571428571 ? Math.random() < 0.9629629629629629629 ? Math.random() < 0.9615384615384615384 ? Math.random() < 0.96 ? Math.random() < 0.958333333333333333333 ? Math.random() < 0.9565217391304347826 ? Math.random() < 0.9545454545454545454 ? Math.random() < 0.9523809523809523809 ? Math.random() < 0.95 ? Math.random() < 0.9473684210526315789 ? Math.random() < 0.9444444444444444444 ? Math.random() < 0.9411764705882352941 ? Math.random() < 0.9375 ? Math.random() < 0.9333333333333333333 ? Math.random() < 0.9285714285714285714 ? Math.random() < 0.9230769230769230769 ? Math.random() < 0.91666666666666666666 ? Math.random() < 0.9090909090909090909 ? Math.random() < 0.9 ? Math.random() < 0.888888888888888888 ? Math.random() < 0.875 ? Math.random() < 0.857142857142857142 ? Math.random() < 0.8333333333333333333 ? Math.random() < 0.8 ? Math.random() < 0.75 ? Math.random() < 0.666666666666666666 ? Math.random() < 0.5 ? 1 : 2 : 3 : 4 : 5 : 6 : 7 : 8 : 9 : 10 : 11 : 12 : 13 : 14 : 15 : 16 : 17 : 18 : 19 : 20 : 21 : 22 : 23 : 24 : 25 : 26 : 27 : 28 : 29 : 30 : 31 : 32 : 33 : 34 : 35 : 36 : 37 : 38 : 39 : 40 : 41 : 42 : 43 : 44 : 45 : 46 : 47 : 48 : 49 : 50 : 51 : 52 : 53 : 54 : 55 : 56 : 57 : 58 : 59 : 60 : 61 : 62 : 63 : 64 : 65 : 66 : 67 : 68 : 69 : 70 : 71 : 72 : 73 : 74 : 75 : 76 : 77 : 78 : 79 : 80 : 81 : 82 : 83 : 84 : 85 : 86 : 87 : 88 : 89 : 90 : 91 : 92 : 93 : 94 : 95 : 96 : 97 : 98 : 99 : 100 : 101 : 102 : 103 : 104 : 105 : 106 : 107 : 108 : 109 : 110 : 111 : 112 : 113 : 114 : 115 : 116 : 117 : 118 : 119 : 120 : 121 : 122 : 123 : 124 : 125 : 126 : 127 : 128 : 129 : 130 : 131 : 132 : 133 : 134 : 135 : 136 : 137 : 138 : 139 : 140 : 141 : 142 : 143 : 144 : 145 : 146 : 147 : 148 : 149 : 150 : 151 : 152 : 153 : 154 : 155 : 156 : 157 : 158 : 159 : 160 : 161 : 162 : 163 : 164 : 165 : 166 : 167 : 168 : 169 : 170 : 171 : 172 : 173 : 174 : 175 : 176 : 177 : 178 : 179 : 180 : 181 : 182 : 183 : 184 : 185 : 186 : 187 : 188 : 189 : 190 : 191 : 192 : 193 : 194 : 195 : 196 : 197 : 198 : 199 : 200 : 201 : 202 : 203 : 204 : 205 : 206 : 207 : 208 : 209 : 210 : 211 : 212 : 213 : 214 : 215 : 216 : 217 : 218 : 219 : 220 : 221 : 222 : 223 : 224 : 225 : 226 : 227 : 228 : 229 : 230 : 231 : 232 : 233 : 234 : 235 : 236 : 237 : 238 : 239 : 240 : 241 : 242 : 243 : 244 : 245 : 246 : 247 : 248 : 249 : 250 : 251 : 252 : 253 : 254 : 255 : 256 : 257 : 258 : 259 : 260 : 261 : 262 : 263 : 264 : 265 : 266 : 267 : 268 : 269 : 270 : 271 : 272 : 273 : 274 : 275 : 276 : 277 : 278 : 279 : 280 : 281 : 282 : 283 : 284 : 285 : 286 : 287 : 288 : 289 : 290 : 291 : 292 : 293 : 294 : 295 : 296 : 297 : 298 : 299 : 300 : 301 : 302 : 303 : 304 : 305 : 306 : 307 : 308 : 309 : 310 : 311 : 312 : 313 : 314 : 315 : 316 : 317 : 318 : 319 : 320 : 321 : 322 : 323 : 324 : 325 : 326 : 327 : 328 : 329 : 330 : 331 : 332 : 333 : 334 : 335 : 336 : 337 : 338 : 339 : 340 : 341 : 342 : 343 : 344 : 345 : 346 : 347 : 348 : 349 : 350 : 351 : 352 : 353 : 354 : 355 : 356 : 357 : 358 : 359 : 360 : 361 : 362 : 363 : 364 : 365 : 366 : 367 : 368 : 369 : 370 : 371 : 372 : 373 : 374 : 375 : 376 : 377 : 378 : 379 : 380 : 381 : 382 : 383 : 384 : 385 : 386 : 387 : 388 : 389 : 390 : 391 : 392 : 393 : 394 : 395 : 396 : 397 : 398 : 399 : 400 : 500 : 999 : 506 : 502 : 504 : 503 : 505 : 507 : 501 : 508 : 509 : 0 : 801 : 802 : 882 : 803 : 804 : 805 : 806 : 807 : 808 : 809 : 810 : 811 : 812; 
    var tile = new Tile(this.grid.randomAvailableCell(), value);
    
    this.grid.insertTile(tile);
    if (tile.value === 0) this.over = true;
  }
};

// Sends the updated grid to the actuator
GameManager.prototype.actuate = function () {
  if (this.scoreManager.get() < this.score) {
    this.scoreManager.set(this.score);
  }

  this.actuator.actuate(this.grid, {
    score:      this.score,
    over:       this.over,
    won:        this.won,
    bestScore:  this.scoreManager.get(),
    terminated: this.isGameTerminated()
  });

};

// Save all tile positions and remove merger info
GameManager.prototype.prepareTiles = function () {
  this.grid.eachCell(function (x, y, tile) {
    if (tile) {
      tile.mergedFrom = null;
      tile.savePosition();
    }
  });
};

// Move a tile and its representation
GameManager.prototype.moveTile = function (tile, cell) {
  this.grid.cells[tile.x][tile.y] = null;
  this.grid.cells[cell.x][cell.y] = tile;
  tile.updatePosition(cell);
};

// Move tiles on the grid in the specified direction
GameManager.prototype.move = function (direction) {
  // 0: up, 1: right, 2:down, 3: left
  var self = this;

  if (this.isGameTerminated()) return; // Don't do anything if the game's over

  var cell, tile;

  var vector     = this.getVector(direction);
  var traversals = this.buildTraversals(vector);
  var moved      = false;

  // Save the current tile positions and remove merger information
  this.prepareTiles();

  // Traverse the grid in the right direction and move tiles
  traversals.x.forEach(function (x) {
    traversals.y.forEach(function (y) {
      cell = { x: x, y: y };
      tile = self.grid.cellContent(cell);

      if (tile) {
        var positions = self.findFarthestPosition(cell, vector);
        var next      = self.grid.cellContent(positions.next);

        // Only one merger per row traversal?
        if (next && next.value === tile.value && !next.mergedFrom) { 
          var merged = new Tile(positions.next, tile.value * 1);
          merged.mergedFrom = [tile, next];

          self.grid.insertTile(merged);
          self.grid.removeTile(tile);

          // Converge the two tiles' positions
          tile.updatePosition(positions.next);

          // Update the score
          self.score += 1;

          // The mighty 1 tile
          if (merged.value === 1) self.won = true;
          if (merged.value === 0) self.over = true;
        } else {
          self.moveTile(tile, positions.farthest);
        }

        if (!self.positionsEqual(cell, tile)) {
          moved = true; // The tile moved from its original cell!
        }
      }
    });
  });

  if (moved) {
    this.addRandomTile();

    if (!this.movesAvailable()) {
      this.over = true; // Game over!
    }

    this.actuate();
  }
};

// Get the vector representing the chosen direction
GameManager.prototype.getVector = function (direction) {
  // Vectors representing tile movement
  var map = {
    0: { x: 0,  y: -1 }, // up
    1: { x: 1,  y: 0 },  // right
    2: { x: 0,  y: 1 },  // down
    3: { x: -1, y: 0 }   // left
  };

  return map[direction];
};

// Build a list of positions to traverse in the right order
GameManager.prototype.buildTraversals = function (vector) {
  var traversals = { x: [], y: [] };

  for (var pos = 0; pos < this.size; pos++) {
    traversals.x.push(pos);
    traversals.y.push(pos);
  }

  // Always traverse from the farthest cell in the chosen direction
  if (vector.x === 1) traversals.x = traversals.x.reverse();
  if (vector.y === 1) traversals.y = traversals.y.reverse();

  return traversals;
};

GameManager.prototype.findFarthestPosition = function (cell, vector) {
  var previous;

  // Progress towards the vector direction until an obstacle is found
  do {
    previous = cell;
    cell     = { x: previous.x + vector.x, y: previous.y + vector.y };
  } while (this.grid.withinBounds(cell) &&
           this.grid.cellAvailable(cell));

  return {
    farthest: previous,
    next: cell // Used to check if a merge is required
  };
};

GameManager.prototype.movesAvailable = function () {
  return this.grid.cellsAvailable() || this.tileMatchesAvailable();
};

// Check for available matches between tiles (more expensive check)
GameManager.prototype.tileMatchesAvailable = function () {
  var self = this;

  var tile;

  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      tile = this.grid.cellContent({ x: x, y: y });

      if (tile) {
        for (var direction = 0; direction < 4; direction++) {
          var vector = self.getVector(direction);
          var cell   = { x: x + vector.x, y: y + vector.y };

          var other  = self.grid.cellContent(cell);

          if (other && other.value === tile.value) {
            return true; // These two tiles can be merged
          }
        }
      }
    }
  }

  return false;
};

GameManager.prototype.positionsEqual = function (first, second) {
  return first.x === second.x && first.y === second.y;
};


