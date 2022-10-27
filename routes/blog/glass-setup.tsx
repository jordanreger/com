/** jsx h */

import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Header from "../../islands/Header.tsx";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Google Glass Setup (XE24) - Jordan Reger</title>
        <meta name="title" content="Google Glass Setup (XE24) - Jordan Reger" />
        <meta
          name="description"
          content="Google Glass Setup (XE24)"
        />
        <link rel="stylesheet" href="../index.css" />
        <link rel="icon" href="/logo.svg" sizes="any" type="image/svg+xml" />
      </Head>
      <div>
        <Header></Header>
      </div>
      <div class="x">
        <div class="box" id="cover">
          <div class="content">
            <div class="title">Google Glass Setup (XE24)</div>
            <br />
            <div class="tag">{new Date("2022-10-21T22:00:00.000-04:00").toString()}</div>
            <div class="body">
              How to setup a Google Glass (updated version)
            </div>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <div class="tag" id="introduction">Introduction</div>
            <div class="body">
              First off, if you want to know why I bought a Google Glass in 2022, read my <a href="/blog/buying-a-google-glass-in-2022">previous post</a>.
              Second, this is using a Google Glass Explorer Edition (XE) and Windows 10/11.
              I cannot confirm this works with any other operating systems.
              Here's a guide on how to setup your XE for use.
              <br/>
              <br/>
              (This will be updated the more I learn about Glass)
            </div>
            <br/>
            <div class="tag" id="downloads">Downloads</div>
            <div class="body">
              <a href="https://developers.google.com/glass/tools-downloads/system">Download</a> the XE24 update from Google Developers - both the Factory System Image and the Rooted Bootloader.
              You'll need the rooted boot (I'll explain why later), the standard system and standard recovery img files.
            </div>
            <br/>
            <div class="tag" id="update-usb-driver">Update USB Driver</div>
            <div class="body">
              You'll also need Android Studio, and a specific Google USB Driver.
              To install the driver, go to:
              <br/>
              <br/>
              Tools > SDK Manager > (Stay on the Android SDK page) SDK Tools
              <br/>
              <br/>
              Scroll down and you will find a checkbox next to "Google USB Driver."
              Once you've installed it, copy the location of the SDKs and go to File Explorer.
              It's most likely in AppData, under extras/google/usb_driver.
              You should see a file named "android_winusb.inf" - this is the file you need to alter.
              First, you need to turn off driver signing.
              To do this, hit the Windows button and then hold Shift and click "Restart."
              There should be an option in "Advanced Options" that allows you to turn off Driver Signing.
              If you receive the Blue Screen of Death here, just reboot and try again until you get it.
              Once you've done so, edit the driver ("android_winusb.inf") to include this under both NTx86 and NTamd64:
              <br/>
              <br/>
              <pre>
                ;Google Glass
                <br/>
                %SingleAdbInterface%    = USB_Install, USB\VID_18D1&PID_9001
                <br/>
                %CompositeAdbInterface% = USB_Install, USB\VID_18D1&PID_9001&MI_01
              </pre>
              <br/>
              <br/>
              Once you've done that, save it.
            </div>
            <br/>
            <div class="tag" id="installing-the-driver">Installing the Driver</div>
            <div class="body">
              Once you've saved the updated driver, you need to install it.
              Plug your Glass into the computer.
              Open Device Manager and find a device most likely called "Glass_1."
              Right click it and click "Update driver."
              Choose "Browse my computer for drivers," and then paste the SDK location in the input box.
              Confirm all further prompts, if any.
              Power off the device, and wait about 30 seconds to continue.
              <br/>
              <br/>
              Now you're going to enter into fastboot mode.
              To do this, hold the camera button, press the power button briefly, and then hold the camera button for 15 more seconds.
              This will display a menu after a short period of time.
              Click the camera button once and then hold it to select "Boot into fastboot mode."
              You're going to have to update the driver once more the same exact way just with one number change: on all Google Glass lines, change PID_9001 to PID_9002.
              Do the same update driver cycle as last time, and then you'll be set for the next step.
            </div>
            <br/>
            <div class="tag" id="fastboot">Fastboot</div>
            <div class="body">
              While still in Fastboot mode (and still connected), run these commands:
              <br/>
              <br/>
              <pre>
                fastboot oem unlock
                <br/>
                # this will prompt you to run it again to confirm
                <br/>
                fastboot oem unlock
                <br/>
                # cd into the folder with the img files
                <br/>
                fastboot flash:raw boot boot.img # MAKE SURE THIS IS THE ROOTED VERSION
                <br/>
                fastboot flash system system.img
                <br/>
                fastboot flash recovery recovery.img
                <br/>
                fastboot erase cache
                <br/>
                fastboot erase userdata
                <br/>
                fastboot oem lock
                <br/>
                fastboot reboot
              </pre>
              <br/>
              <br/>
              Once you've done this, you'll have installed XE24 on your Glass!
              Keep your device plugged in for the next steps.
            </div>
            <br/>
            <br/>
            <div class="tag" id="change-timezone">Change the Timezone</div>
            <div class="body">
              To change the timezone, run these commands:
              <br/>
              <br/>
              <pre>
                adb shell
                <br/>
                setprop persist.sys.timezone "America/New_York" # find your timezone with <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">this list</a>
                <br/>
                reboot
              </pre>
            </div>
            <br/>
            <div class="tag" id="done">You're Done!</div>
            <div class="body">
              Welcome to the Glass community.
              Keep watching my <a href="https://sr.ht/~jordanreger">Sourcehut</a>/<a href="https://github.com/jordanreger">GitHub</a> for Glass apps (coming soon (probably)).
              If you have a Glass app of your own to share, contact me!
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
