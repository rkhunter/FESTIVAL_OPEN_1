# Create sample NativeScript Application

## Screenshots
<a href="https://github.com/rkhunter/FESTIVAL_OPEN_1/raw/master/Screenshots/login-screen-1.png">
	<img src="https://github.com/rkhunter/FESTIVAL_OPEN_1/raw/master/Screenshots/login-screen-1.png" alt="Screenshot 1" width="180px" height="320px" />
</a>
<a href="https://github.com/rkhunter/FESTIVAL_OPEN_1/raw/master/Screenshots/login-screen-2.png">
	<img src="https://github.com/rkhunter/FESTIVAL_OPEN_1/raw/master/Screenshots/login-screen-2.png" alt="Screenshot 2" width="180px" height="320px" />
</a>
<a href="https://github.com/rkhunter/FESTIVAL_OPEN_1/raw/master/Screenshots/second-screen.png">
	<img src="https://github.com/rkhunter/FESTIVAL_OPEN_1/raw/master/Screenshots/second-screen.png" alt="Screenshot 3" width="180px" height="320px" />
</a>

## Explanation
1. I have  configured Windows system for NativeScript by installing NodeJS v6.9.1, JDK 1.8.0_112, Android SDK 25.2.3, nativescript 2.4.2
2. I have created a new nativescript project by running
```tns create FESTIVAL_OPEN_1 --tsc ```
3. I have slightly changed the traditional file structure by creating the folders ```models``` and ```views```, in which I store *data models* and *pages* **respectively**
4. I have removed the default page
5. I have created the first screen, which I have called ```login-page```
6. I have created an ```email``` and ```password``` classes in ```models``` to *store* and *validate* emails and passwords **respectively**
7. The password policy I have chosen is such:
  + Two uppercase letters
  + One special case letter
  + Two digits
  + Three lowercase
  + Length is longer or equal to eight
8. Filled the ```login-page.xml``` with UI elements and added the logic to ```login-page.ts```
9. Created the second screen, which I have called ```main-page```
10. Filled the ```main-page.xml``` with UI elements and added the logic to ```main-page.ts```
  + Notes:
  + Used non-trivial way to perform ```HTTP request to download the image``` by not simply using ```src``` attribute for ```Image``` inside ```main-page.xml```, but dynamically, using ```imageSource```, with the help of promises
  + As for ```ListView``` sub-task I used ```file-system``` to read the mock data from the application storage, with the help of promises. Then, I try to parse JSON data, if it is invalid, an error is thrown.