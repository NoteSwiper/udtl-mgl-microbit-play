enum RadioMessage {
    message1 = 49434
}
led.plotBarGraph(
0,
2
)
basic.showString("UNDERTALE MEGALOVANIA BUT PLAYING ON MICROBIT SHORTLY")
datalogger.log(
datalogger.createCV("started", 1),
datalogger.createCV("Name", 120),
datalogger.createCV("Id", randint(0, 999999)),
datalogger.createCV("Htls", 662),
datalogger.createCV("Plaar", 3153),
datalogger.createCV("TRACK INFO", 1111),
datalogger.createCV("Tempo", music.tempo()),
datalogger.createCV("Url", "//github.com/NoteSwiper/udtl-mgl-microbit-play"),
datalogger.createCV("Postseasonprl", 6182001362)
)
for (let カウンター = 0; カウンター <= 3; カウンター++) {
    if (カウンター == 0) {
        for (let index = 0; index < 2; index++) {
            music.playTone(294, music.beat(BeatFraction.Quarter))
        }
    } else if (カウンター == 1) {
        for (let index = 0; index < 2; index++) {
            music.playTone(262, music.beat(BeatFraction.Quarter))
        }
    } else if (カウンター == 2) {
        for (let index = 0; index < 2; index++) {
            music.playTone(247, music.beat(BeatFraction.Quarter))
        }
    } else {
        for (let index = 0; index < 2; index++) {
            music.playTone(233, music.beat(BeatFraction.Quarter))
        }
    }
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
}
basic.forever(function () {
	
})
