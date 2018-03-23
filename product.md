**What did you actually build during this phase? (High level description of the software design)**

1. **Project overview and scope**

   1.1 **Summary of core features**

   ​	The purpose of this website was to build a graduation admission ticketing system 	to allow the department to organize the selection and admission of students and easy accessible ticketing panels to allow managing the admission process. For this, we have divided the big system into a subsystem with some of the core features that makes up part of the big ticketing system. In this phase, we have developed the cores features such as user authentication, basic ticketing system for student, budget director, professors, associate chair graduate, grad office staff, a dashboard for viewing ticket status. We also have additional features such as editing notes for tickets and dashboard notifications. 

   1.2 **Technologies and tools**

   ​	The technologies used in this phase were: 

   ​	**Front-end:** 

   ​	HTML: 

   ​	CSS: 

   ​	Javascript: 

   ​	React:

   ​	BootStrap, Semantic UI: 

   ​	**Backend:** 

   ​	Node:

   ​	Express: 

   ​	**Database:** 

   ​	MongoDB:

   A detailed discussion of how each of these tools is used is included below.

   We have selected those tool because they provide portability and can be integrated and operate well on all platforms. 

   2. **Architectural & component-level design**

      **2.1 System Structure** 

      **2.2. Screen shot breakdown**

      ​	**User** 

      ​	dashboard.js - what user would see when first entering the website. 

      ​	LoginUser.js - what user would see when submitting a login form

      ​	DisplayTicket.js - what user would see when viewing ticket page and status of their ticket.

      ​	UserInfo.js - Display user 

      ​	DisplayIssue.js - what user would see when generating a ticket.

      ​	DisplayOffer.js - User is able to see the status of the offer.

      **2.3 Application architecture**

      (see application_architecture_diagram.pdf)

      ​	functional decomposition of applications

      ​	services components

      **2.4** **Technology architecture**

      ​	Presentation layer

      ​	Data access layer

      **2.5 Database architecture**

      ​	**Standards**

      ​	**Database description**

      ​		 **Database design**

      ​		(diagram to be included)

      ​		**Models**

      **2.6 API**

      ​	**API description**

      ​	**Error handling**

      ​	

      **2.7 Description of non functional attributes**

      **Security:** 

      **Reliability:** 

      **Portability:**

      **Maintainability:** We ensured maintainability by separating modules for each for each of the functionality, separate each page in different javascript file, and a generic database models that can be easily updated. We made sure that each part of the application can be updated or changed and  carried out without affecting the application as a whole.

      **Reusability:** We ensured reusability of the code by putting 

      **3. User interface design**

      Description of the user interface

      (Add screenshots of the)

      ​

      **4. Testing issues**

      ​	Test cases and Expected results

      ​		Ticket page testing

      ​		Sign up/ login testing

      ​		Feature testing

      ​		Issues testing

      ​		API testing

      **5. How is this different from what you originally proposed?Why?**

      ​

      **6. Technical highlights: interesting bugs, challenges, lessons learned, observations, etc.**

      ​

      **7. Project management and progress reporting**

      1.   **Teamwork and project progress (with burndown chart)**

           - Referring to specific meeting minutes or other process artifacts.

      	2. **Things that worked well (strengths)**

          The separation of independent in front end and back end worked very well. By dividing front end and back end, we were able to work on independent tasks without having to worry about the merge conflicts.  Whenever an integration of front and back end is needed, we made sure to communicate with each other in order to decide and make plans for parts that might cause conflicts. This division gave us a significant efficiency in the code development phases. Also, in the code development process, we made sure to separate modules as small as possible so that we could reuse each other's code, and it made the code easier to understand and to debug. 

      	3. **Improvements (weakness) Next phase goals (phase 3 final demo)**

          ​

      **8. Phase 3 goals (final demo) **

      Plan for final work towards demo

      - **Enhance security:** From the above standards of the website, we haven't yet satisfy the security standard. We will solidify the security of the website. In particular, we will develop ways to prevent code injection from client-side. 
      - **Deploy the project:** We will deploy the project in order to make the system accessible anytime, anywhere and thus enhance the portability. 
      - ​

      ​

      ​