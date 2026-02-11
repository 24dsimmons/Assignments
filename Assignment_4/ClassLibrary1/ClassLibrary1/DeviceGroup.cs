using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace MiniSmartHome
{
    internal class DeviceGroup
    {
       private List<SmartDevice> smartDevices = new();

        public void AddDevice(SmartDevice device)
        {
            if (device is null)
            {
                throw new ArgumentNullException(nameof(device));
            }

            if (smartDevices.Contains(device))
            {
                throw new InvalidOperationException($"A device with id '{device.DeviceID}' already exists!"); //Throws exception if name is already in smart device list. 
            }
            }

            public void TurnOffAll() //Turns each device off.
            {
            foreach (SmartDevice device in smartDevices)
            {
                device.TurnOff();
            }
            }

            public void GetStatAll() // gets status for all smart devices.
        {
            foreach (SmartDevice device in smartDevices) {
                device.GetStatus();
        }
        }

    }
} 