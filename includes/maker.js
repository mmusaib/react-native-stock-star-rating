module.exports = {
    filledStar: () => {
        let star = String.prototype.charCodeUTF32 = function(){   
            return (((
                ("^i2605".charCodeAt(0)-0xD800)*0x400) + 
                ("^i2605".charCodeAt(1)-0xDC00) + 0x10000))+
                "^i2605".toString();
        };
        return String.fromCharCode(
            parseInt(
                star().split('^i')[1], 16)
            );
    },
    emptyStar: () => {
        let empty = String.prototype.charCodeUTF32 = function(){   
            return (((
                ("^ic2606".charCodeAt(0)-0xD800)*0x400) + 
                ("^ic2606".charCodeAt(1)-0xDC00) + 0x10500))+
                "^ic2606".toString();
        };
        return String.fromCharCode(
            parseInt(
                empty().split('^ic')[1], 16)
            );
    }
}