#include <Wire.h> 
#include <LiquidCrystal_I2C.h> 
#include <FirebaseESP8266.h>

#include <addons/TokenHelper.h>
#include <addons/RTDBHelper.h>

#define WIFI_SSID "Rehan"
#define WIFI_PASSWORD "12345678"
#define API_KEY "Y3AIutGEo8lIK1N8MGKbNW8mCqoK8oVDJLLnTuGX"
#define DATABASE_URL "kel4lagi-default-rtdb.asia-southeast1.firebasedatabase.app"

#define USER_EMAIL "cps.tubesiot@gmail.com"
#define USER_PASSWORD "tubesiot123" 

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;
unsigned long senddata = 0;

LiquidCrystal_I2C lcd = LiquidCrystal_I2C(0x27, 16, 2);
const int pinSensor =A0;
const int BUZZER = D8;
int sensorpir = 10;
int ledpin = 12;

//Set-up Sensor
void setup ()
{

 Serial.begin(9600);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD); // connect to wifi
  Serial.print("connecting");

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  config.api_key = API_KEY; // Assign the api key (required)
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;
  config.database_url = DATABASE_URL;
  config.token_status_callback = tokenStatusCallback;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
  Firebase.setDoubleDigits(5);

//setup lcd
 lcd.init();
 lcd.backlight();
 lcd.clear();
 lcd.setCursor(0, 1);
 lcd.print("APPA");

 //Raindrop
 pinMode (pinSensor, INPUT);
 pinMode (BUZZER, OUTPUT);

 //PIR
 pinMode(sensorpir, INPUT);
 pinMode(ledpin, OUTPUT);

 WiFi.begin(WIFI_SSID, WIFI_PASSWORD); // connect to wifi
 Serial.print("connecting");
}

//Loop Sensor dan LCD
void loop() {
 
 delay(100);
 //Raindrop
 int nilai = analogRead(pinSensor);
 String ket="";
 Serial.println(nilai);
 lcd.clear();
 lcd.print("Raindrops:");
 lcd.print(nilai);
 if(nilai>1000){
 ket="    -CERAH-    ";
 digitalWrite(BUZZER, LOW); 
 }
 if(nilai<700){
 ket="    -HUJAN-    ";
 digitalWrite(BUZZER, HIGH);
 }

 //PIR
 int value = digitalRead(sensorpir);
 digitalWrite (ledpin, value);

 //LCD
 lcd.setCursor(0, 1);
 lcd.print(ket);

 if (Firebase.ready() && (millis() - senddata > 15000 ||senddata == 0)){
  senddata = millis();
  Firebase.setInt(fbdo, "/raindrop", pinSensor);

 Serial.println("Data = OFF sent to Firebase successfully!");
 }
 else
 {
 Serial.println("Data sending failed");
  
 delay(1000);
 }
}