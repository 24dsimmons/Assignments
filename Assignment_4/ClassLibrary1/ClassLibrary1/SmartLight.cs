using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text;

namespace MiniSmartHome
{
    public class SmartLight : SmartDevice
    {
        private int Brightness;


        public SmartLight(string DeviceID, string name) :base (DeviceID, name) // Base here is grabing these from the Constructor in SmartDevice!
        {
            Brightness = 0;
        }

        public void SetBrightness (int value)
        {
            Brightness = value;
            if (value < 0 || value > 100)
            {
                throw new ArgumentException(  // Throwing exception for invalid argument range!
                 "Brightness must be between 0 and 100.");
            }

            if (!Power.IsPoweredOn)
            {
                throw new InvalidOperationException("Light must be powered on to change brightness!"); 
                // Throws invalid operation because the lights brightness cannot be changed if the power is not on!
            }
        }
    

        public override string GetStatus() // without the override C-Sharp thinks that you are creating a new method. It tells us that we are using this rule but now we are defining it.
        {
            return
                $"ID: {DeviceID}, Name: {DeviceName}, Online: {Power.IsOnline}, Power: {Power.IsPoweredOn}, Brightness: {Brightness}";



        }
    }

}
