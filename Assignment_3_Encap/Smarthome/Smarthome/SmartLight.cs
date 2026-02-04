using System;

namespace SmartHomeLib;

public class SmartLight : SmartDevice
{
    private int brightness; // Must be private to allow this value to stay consistant. shouldnt be able to be changed through code. 
    private string color;

    public void SetBrightness (int value) 
        if (!IsOnline) // ! means NOT
        {
            Console.WriteLine ("Light is off. Please power the device on to change brightness!") //print statement
            return; // Nothing below runs Brightness doesnt change.
        }

        if (value < 0 || value > 100) // Checking the invalid values below 0 and above 100!
        {
            Console.WriteLine ("Brightness must be between 0 and 100.");
            return;
        }

        brightness = value; // only runs if both light = ON and the value is within our given range. 
        
    public void SetColor (string newColor)
    {
       if (!IspoweredOn)
        {
            Console.WriteLine("Light is off. Please power the device on to change Color!") //print statement
            return; // Nothing below runs Brightness doesnt change.
        }

       if (string.IsNullOrEmpty (newColor)) 
        {
        Console.WriteLine("Color Cannot be Blank!") //print statement
            return; // Nothing below runs Brightness doesnt change.
        
        newColor = color; 

    }
    public override string GetStatus ()
    {
    return $"Power: {IsPoweredOn},Brightness {Brightness}, Color: {color}"; // Override of GetStatus class.
    }
    public override void ApplyMode (string mode)
    {
        if (mode == "Night" && IsPoweredOn)
        {
        Brightness = 10;        
        }
    }

}
