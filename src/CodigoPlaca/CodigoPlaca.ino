void setup() //
{ 
  Serial.begin(9600);
  //analogReference(2);
  conectarWiFi();  
}
// ------------------------------------------------------------------
unsigned long ultimo = 0;
const int tiempo = 5 * 60 * 1000;
void loop() {
    if(ultimo+tiempo < millis())
    {
      ultimo = millis();
      Serial.println("...");
      float tempC = analogRead(A0); 
      tempC = (3.0 * tempC * 100.0)/1023.0; 
      int temp = tempC;
      Serial.println(temp);
      POST(String(temp));
    }
    else
    {
      Serial.print(String(((ultimo+tiempo)-millis())/1000) + " ");
    }
    delay(1000);
}
