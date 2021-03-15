function 右まわり () {
    if (0 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft) && 0 == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        return
    } else if (1 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft) && 0 == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        basic.pause(100)
        return
    } else if (0 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft) && 1 == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        basic.pause(100)
        return
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        if (1 == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
            return
        } else {
            basic.pause(60)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    flag = 1
    basic.showNumber(flag)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    basic.pause(100)
})
function 左まわり () {
    if (0 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft) && 0 == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        return
    } else if (1 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft) && 0 == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        basic.pause(100)
        return
    } else if (0 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft) && 1 == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        basic.pause(100)
        return
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        if (1 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            return
        } else {
            basic.pause(60)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    flag = 2
    basic.showNumber(flag)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 250)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(100)
})
let flag = 0
flag = 0
basic.showNumber(flag)
basic.forever(function () {
    if (1 == flag) {
        右まわり()
    } else if (2 == flag) {
        左まわり()
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
