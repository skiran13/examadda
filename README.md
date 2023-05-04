# Exam Adda

An all purpose exam hosting platform for different use cases

![1](./screenshots/screenshots/LandingPage.png)

![1](./screenshots/screenshots/Login.png)

![1](./screenshots/screenshots/ViewExam.png)

![1](./screenshots/screenshots/TestPage.png)

![1](./screenshots/screenshots/GeneralInstruction.png)

# Getting Started

### 1) Install the dependencies:
 
	npm install

### 2) Run the app:

	npm start

### 3) Connect to the server:

### Navigate to the server folder

	node server

## Web Application consists of:
### 1)	Website landing page

    Displays search bar, navigation bar including signup/login option with search bar

### 2)Searching an Exam
    User searches a particular exam and related resources on the platform.

### 3)	Displaying search results
    Search functionality returns the required exam as a result if found.
    
### 4)	Visiting exam page 
    Selecting the exam leads the user to the exam details page.

### 5)	Exam page
-	Displays all the information related to the exam (dates, syllabus, score card, admit card, cut offs, pattern).
-	Displays the free mock tests available.
-	Also shows the locked tests.   
-	Display the various plans available.
-	Also return similar exams’ names at the end.

### 6) Selecting the mock test option
	    User chooses the desired mock test option to write.	
### 7) Login/Signup Dialog Box pops before exam starts
    User Enters login credentials or signs up (registration possible through Facebook and Gmail).

### 8) User Dashboard (appears when logged in directly)
    This is displayed after user logs into the profile from home (not shown when user logs in through other options like mock test). Contains navigation bar and exam cards.

### 9) Selecting a mock test
     Shows general instructions of an online test like timing, flagging, how to SAVE or change your answers.

### 10) Clicking Next 
     Takes user to an instruction page related to the respective test. Also has the Begin test option.

### 11) Test Starts
-   Test begins, questions appear and the timer starts.
-   Also shows the section wise details of candidate.
