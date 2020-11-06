
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

//const char* ssid     = "COMTECO-95265803";
//const char* password = "JBEMZ70607";
const char* ssid     = "Erick";
const char* password = "contraseña";
String pubString;
const char* host     = "104.129.131.178";
float temperatura   = 0;
const int httpPort   = 80;

void conectarWiFi()
{
   //WiFi.persistent( false );
   WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
      delay(2000);
      Serial.print("." + String(WiFi.status()));
    }
    Serial.println("WiFi connected");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());
}

int contador = 0;
void POST(String temperatura){
  WiFiClient client;
  if (!client.connect(host,httpPort)) {
        contador = contador +1;
        Serial.println("connection failed");
        if(contador>=5)
        {
          conectarWiFi();
          contador = 0;
        }
        return;
   }
   else
   {
    Serial.println("Tendría que estar conectado");
   }
  pubString = "{}";
  String pubStringLength = String(pubString.length(), DEC);
  Serial.println("Requesting POST: ");
  client.println("POST /Post?temperatura=" + temperatura + " HTTP/1.1");
  client.println("Content-Type: application/json");
  client.println("Connection: close");  
  client.print("Content-Length: ");
  client.println(pubStringLength);
  client.println();
  client.print(pubString);
  client.println();
}
