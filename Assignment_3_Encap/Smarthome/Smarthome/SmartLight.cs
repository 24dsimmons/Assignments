using System;

namespace SmarthomeLib;

public class SmartLight : SmartDevice
{
    private int brightness;
    private string color;

 
    public int Brightness => brightness;
    public string Color => color;

    public SmartLight(string deviceId, string name) : base(deviceId, name)
    {
        brightness = 100;   
    }

    public void SetBrightness(int value)
    {
        if (!IsPoweredOn)
        {
            Console.WriteLine("Light is off. Please power the device on to change brightness!");
            return;
        }

        if (value < 0 || value > 100)
        {
            Console.WriteLine("Brightness must be between 0 and 100.");
            return;
        }

        brightness = value;
    }

    public void SetColor(string newColor)
    {
        if (!IsPoweredOn)
        {
            Console.WriteLine("Light is off. Please power the device on to change color!");
            return;
        }

        if (string.IsNullOrWhiteSpace(newColor))
        {
            Console.WriteLine("Color cannot be blank!");
            return;
        }

        color = newColor.Trim();
    }

    public override string GetStatus()
    {
        return $"Power: {IsPoweredOn}, Brightness: {brightness}, Color: {color}";
    }

    public override void ApplyMode(string mode)
    {
        if (!IsPoweredOn) return;

        if (mode == "Night")
        {
            brightness = 10;
            color = "Warm White";
        }
    }
}