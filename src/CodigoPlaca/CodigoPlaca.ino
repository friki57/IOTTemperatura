void setup() //
{ 
  Serial.begin(9600);
  conectarWiFi();  
}
// ------------------------------------------------------------------
void loop() {
    Serial.println("...");
    float tempC = analogRead(A0); 
    tempC = (3.3 * tempC * 100.0)/1024.0; 
    int temp = tempC;
    Serial.print(temp);
    POST(String(temp));
    delay(2000);
}
