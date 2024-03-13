#include <Wire.h> 
#include <LiquidCrystal_I2C.h> 

LiquidCrystal_I2C lcd = LiquidCrystal_I2C(0x27, 16, 2);
const int pinSensor =A0;
const int BUZZER = D8;
int sensorpir = 10;
int ledpin = 12;


// Set-Up LCD
void setLCD() {
 lcd.init();
 lcd.backlight();
 lcd.clear();
 lcd.print("ACAY");
 lcd.setCursor(0, 1);
 lcd.print("APPA");
}

//Set-up Sensor
void setup ()
{
 //Raindrop
 setLCD();
 Serial.begin(9600);
 pinMode (pinSensor, INPUT);
 pinMode (BUZZER, OUTPUT);

 //PIR
 pinMode(sensorpir, INPUT);
 pinMode(ledpin, OUTPUT);
}

//Loop Sensor dan LCD
void loop() {
 //Raindrop
 int nilai = analogRead(pinSensor);
 String ket="";
 Serial.println(nilai);
 lcd.clear();
 lcd.print("Raindrops:");
 lcd.print(nilai);
 if(nilai>1000){
 ket="CERAH";
 digitalWrite(BUZZER, LOW);

 }
 if(nilai<700){
 ket="HUJAN";
 digitalWrite(BUZZER, HIGH);
 }

 //PIR
 int value = digitalRead(sensorpir);
 digitalWrite (ledpin, value);

 //LCD
 lcd.setCursor(0, 1);
 lcd.print(ket);
 delay(1000);
}