using System;

namespace SmarthomeLib;

public class SecurityCamera : SmartDevice
{
    private bool isRecording;
    private readonly int storageCapacityMB;
    private int storageUsedMB;

 
    public bool IsRecording => isRecording;
    public int StorageUsed => storageUsedMB;
    public int StorageCapacity => storageCapacityMB;

  
    public SecurityCamera(string deviceId, string name, int capacityMB)
        : base(deviceId, name)
    {
        if (capacityMB <= 0)
            throw new ArgumentException("Storage capacity must be greater than zero.");

        storageCapacityMB = capacityMB;
        storageUsedMB = 0;
        isRecording = false;
    }

    public void StartRecording()
    {
        if (!IsPoweredOn || !IsOnline)
        {
            Console.WriteLine("Camera must be online and powered on.");
            return;
        }

        if (storageUsedMB >= storageCapacityMB)
        {
            Console.WriteLine("Storage full. Cannot start recording.");
            return;
        }

        isRecording = true;
    }

    public void StopRecording()
    {
        isRecording = false;
    }

    public void SimulateRecording(int minutes)
    {
        if (!isRecording)
        {
            Console.WriteLine("Camera is not recording.");
            return;
        }

        if (minutes <= 0)
        {
            Console.WriteLine("Recording time must be positive.");
            return;
        }

        int dataUsed = minutes * 5; // 5 MB per minute

        if (storageUsedMB + dataUsed > storageCapacityMB)
        {
            Console.WriteLine("Recording would exceed storage capacity.");
            return;
        }

        storageUsedMB += dataUsed;
    }

    public override string GetStatus()
    {
        return $"Power: {IsPoweredOn}, Online: {IsOnline}, Recording: {isRecording}, Storage: {storageUsedMB}/{storageCapacityMB} MB";
    }

    public override void ApplyMode(string mode)
    {
        if (!IsPoweredOn) return;

        if (mode == "Night")
        {
            StartRecording();
        }
    }
}