#include <Wire.h> 
#include <LiquidCrystal_I2C.h> 
#include <Firebase_ESP_Client.h>
#include <ESP8266WiFi.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"

#define WIFI_SSID "nama wifi"
#define WIFI_PASSWORD "pasword wifi"

#define API_KEY "api key"

// Insert RTDB URLefine the RTDB URL */
#define DATABASE_URL "url" 

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
int count = 0;
bool signupOK= false;

LiquidCrystal_I2C lcd = LiquidCrystal_I2C(0x27, 16, 2);
const int pinsensor = A0;
const int BUZZER = D8;
int sensorpir = D7;
int ledpin = D6;

//Set-up Sensor
void setup ()
{
 Serial.begin(9600);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(1000);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  /* Assign the api key (required) */
  config.api_key = API_KEY;

  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;

  /* Sign up */
  if (Firebase.signUp(&config, &auth, "", "")){
    Serial.println("ok");
    signupOK = true;
  }
  else{
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h
  
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  //setup lcd
 lcd.init();
 lcd.backlight();
 lcd.clear();
 lcd.setCursor(0, 1);
 lcd.print("APPA");

 //Raindrop
 pinMode (pinsensor, INPUT);
 pinMode (BUZZER, OUTPUT);

 //PIR
 pinMode(sensorpir, INPUT);
 pinMode(ledpin, OUTPUT);

 WiFi.begin(WIFI_SSID, WIFI_PASSWORD); // connect to wifi
 Serial.print("connecting");
}

//Loop Sensor dan LCD
void loop() 
{
 delay(100);
  //Raindrop
 int nilai = analogRead(pinsensor);
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
 Serial.println(value);

 //LCD
 lcd.setCursor(0, 1);
 lcd.print(ket);
 delay(1000);

 if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 500 || sendDataPrevMillis == 0)){
    sendDataPrevMillis = millis();
    // Write an Int number on the database path test/int
    if (Firebase.RTDB.setInt(&fbdo, "sensor/RAINDROP", nilai)){
      Serial.print("Rain : ");
      Serial.println(value);
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }
    
    // Write an Float number on the database path test/float
    if (Firebase.RTDB.setFloat(&fbdo, "sensor/PIR", value)){
      Serial.print("Movement : ");
      Serial.println(value);
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }
  }
}
