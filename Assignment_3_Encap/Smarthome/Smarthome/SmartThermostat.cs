using System;

namespace SmartHomeLib;

public class SmartLight : SmartDevice
{
    public void SetTemperature (int temp)

        if (!IsPoweredOn)
        {
            Console.WriteLine("Device must be powered on to change temperature!")
            return;
        }

        if (value < 50 || value> 90) // Checking the invalid values below 50 and above 90!
        {
            Console.WriteLine("Temperature must be in between 50 and 90 degrees!");
            return;
        }


}
