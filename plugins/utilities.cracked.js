/**
 *
 * [See more control examples](../../examples/control.html)
 *
 * Frequency setter convenience method
 * @plugin
 * @param {Number} userParam frequency to set
 */
cracked.frequency = function (userParam) {
    if (__.isNum(userParam)) {
        cracked.attr({
            "frequency": userParam
        });
    }
    return cracked;
};

/**
 * Detune setter convenience method
 *
 * [See more control examples](../../examples/control.html)
 *
 * @plugin
 * @param {Number} userParam detune frequency to set
 */
cracked.detune = function (userParam) {
    if (__.isNum(userParam)) {
        cracked.attr({
            "detune": userParam
        });
    }
    return cracked;
};

/**
 * Type setter convenience method
 *
 * [See more control examples](../../examples/control.html)
 *
 * @plugin
 * @param {String} userParam oscillator type to set
 */
cracked.type = function (userParam) {
    if (__.isStr(userParam)) {
        cracked.attr({
            "type": userParam
        });
    }
    return cracked;
};

/**
 * Gain setter convenience method
 *
 * [See more control examples](../../examples/control.html)
 *
 * @plugin
 * @param {Number} userParam gain to set
 */
cracked.volume = function (userParam) {
    if (__.isNum(userParam)) {
        cracked.attr({
            "gain": userParam
        });
    }
    return cracked;
};

/**
 * Delay time setter convenience method
 *
 * [See more control examples](../../examples/control.html)
 *
 * @plugin
 * @param {Number} userParam delay time to set
 */
cracked.time = function (userParam) {
    if (__.isNum(userParam)) {
        cracked.attr({
            "delay": userParam
        });
    }
    return cracked;
};

/**
 * Feedback setter convenience method
 *
 * [See more control examples](../../examples/control.html)
 *
 * @plugin
 * @param {Number} userParam feedback amount to set
 */
cracked.feedback = function (userParam) {
    if (__.isNum(userParam)) {
        cracked.attr({
            "feedback": userParam
        });
    }
    return cracked;
};

/**
 * Speed setter convenience method
 *
 *
 * [See more control examples](../../examples/control.html)
 *
 * @plugin
 * @param {Number} userParam sampler speed to set
 */
cracked.speed = function (userParam) {
    if (__.isNum(userParam)) {
        cracked.attr({
            "speed": userParam
        });
    }
    return cracked;
};

/**
 * Drive setter convenience method
 *
 * [See more control examples](../../examples/control.html)
 *
 * @plugin
 * @param {Number} userParam drive distortion/waveshaper/etc to set
 */
cracked.drive = function (userParam) {
    if (__.isNum(userParam)) {
        cracked.attr({
            "drive": userParam
        });
    }
    return cracked;
};

/**
 * Distortion setter convenience method
 *
 * [See more control examples](../../examples/control.html)
 *
 * @plugin
 * @param {Number} userParam distortion to set
 */
cracked.distortion = function (userParam) {
    if (__.isNum(userParam)) {
        cracked.attr({
            "distortion": userParam
        });
    }
    return cracked;
};

/**
 * q setter convenience method
 *
 * [See more control examples](../../examples/control.html)
 *
 * @plugin
 * @param {Number} userParam q value to set
 */
cracked.q = function (userParam) {
    if (__.isNum(userParam)) {
        cracked.attr({
            "q": userParam
        });
    }
    return cracked;
};

/**
 * pan setter convenience method
 *
 * [See more control examples](../../examples/control.html)
 *
 * @plugin
 * @param {Number} userParam pan value (1 to -1) to set
 */
cracked.pan = function (userParam) {
    if (__.isNum(userParam)) {
        cracked.attr({
            "pan": userParam
        });
    }
    return cracked;
};

/**
 * Convenient way to say start everything
 *
 * [See more control examples](../../examples/control.html)
 *
 * @plugin
 */
cracked.play = function () {
    cracked("*").start();
    return cracked;
};

/**
 * Returns a musical scale/mode based on type
 * @plugin
 * @param {String} type scale type
 */
cracked.scales = function (type) {
    return {
        "major": [0, 2, 4, 5, 7, 9, 11],
        "minor": [0, 2, 3, 5, 7, 8, 10],
        "wholetone": [0, 2, 4, 6, 8, 10],
        "overtone": [0, 2, 4, 6, 7, 9, 10],
        "lydian": [0, 2, 4, 6, 7, 9, 11],
        "mixolydian": [0, 2, 4, 5, 7, 9, 10],
        "ionian": [0, 2, 4, 5, 7, 9, 11]
    }[type];
};

//from https://github.com/hoch/WAAX/blob/master/src/core/Helper.js
/**
 * Converts a pitch value to frequency
 * @plugin
 * @param {Number} pitch
 */
cracked.pitch2freq = function (pitch) {
    return 440.0 * Math.pow(2, ((Math.floor(pitch) - 69) / 12));
};

/**
 * Takes a reference to an array, shuffles it
 * and returns it
 * @plugin
 * @param {Array} arr
 */
cracked.shuffle = function (arr) {
    var counter = arr.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }

    return arr;
};

/**
 * Returns a random number between min & max
 * @plugin
 * @param {Number} min
 * @param {Number} max
 */
cracked.random = function (min, max) {
    return Math.round(min + Math.random() * (max - min));
};

/**
 * Scale an input number between min & max to an output number between a min & max. Supports logarithmic or linear scaling.
 * @plugin
 * @param {Number} position
 * @param {Number} inMin
 * @param {Number} inMax
 * @param {Number} outMin
 * @param {Number} outMax
 * @param {String} type
 */
cracked.scale = function(position, inMin, inMax, outMin, outMax, type) {
    if(type === "log" || type === "logarithmic") {
        var minVal = Math.log(outMin || 1);
        var maxVal = Math.log(outMax || 1);
        // calculate adjustment factor
        var scale = (maxVal-minVal) / (inMax-inMin);
        return Math.exp(minVal + scale*(position-inMin));
    } else if(type === "linear"|| typeof type === "undefined") {
        var result = parseFloat((((position - inMin) * (outMax - outMin)) / (inMax - inMin))  + outMin);
        return result.toFixed(2);
    } else {
        console.error("scale: type "+type+" not supported.");
        return position;
    }
};

/**
 * Converts a second value to millisecond value
 * @plugin
 * @param {Number} second
 */
cracked.sec2ms = function(second) {
    if(__.isNum(second)) {
        return second * 1000;
    } else {
        console.error("sec2ms: param not number");
        return second;
    }
};

/**
 * Returns a boolean true if the browser supports
 * web audio
 * @plugin
 */
cracked.isSupported = function() {
    return ("AudioContext" in window || "webkitAudioContext" in window);
};

/**
 * execute a callback at random intervals within a range
 * @public
 * @param {Function} callback to be invoked at every interval
 * @param {Number} minTime. minimum value for the random interval
 * @param {Number} maxTime. maximum value for the random interval
 */
cracked.random_interval = function(callback, minTime, maxTime) {

    function set_timeout(callback, minTime, maxTime,ran) {
        var nextRan = cracked.random(minTime, maxTime);
        setTimeout(function(){
            callback(nextRan);
            set_timeout(callback, minTime, maxTime,nextRan);
        },ran);
    }

    if(typeof callback === "function" && __.isNum(minTime) && __.isNum(maxTime)) {
        set_timeout(callback, minTime, maxTime,cracked.random(minTime, maxTime));
    }

};

/**
 * fill an array with some values
 * @public
 * @param {Number} size of the array to be filled
 * @param {Function} fn to provide the value, if absent then array is filled with 0's.
 */
cracked.fill_array = function(size,fn) {
    var tmp = [];
    if(__.isNum(size)) {
        var fun = __.isFun(fn) ? fn : function(){return 0;};
        for(var i=0;i<size;i++) {
            tmp.push(fun.apply(this,[]));
        }
    }
    return tmp;
};

/**
 * create a adsr envelope with random values scaled to a length
 * @public
 * @param {Number} length in sec
 */
cracked.random_envelope = function(length) {

    var result = [];

    if(__.isNum(length)) {

        var tmp = __.fill_array(4,function(){
            return __.random(0,100);
        });

        var sum = tmp.reduce(function(a, b) {
            return a + b;
        });

        var factor = (length/sum);

        result = tmp.map(function(element,index){
            return element*factor;
        });
    }

    return result;
};
