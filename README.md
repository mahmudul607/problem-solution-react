Welcome to my repository:

During this coding work i face some issue that i want to share here:
some issues occur during coding for this simple project price filtering condition not work for price field data was text type and at once two min and max. and second problem face with customHooks props data i mistakely give object type data in props and filter is not work with this data suddenly i saw the issue and solve it.

After face price filter issue i split() method and convert text to number:
const [min, max] = e.target.value.split('-').map(Number)

and when i face filter problem with products there is my mistake to set props for hooks i used here curly bracket that make the props object in js so filter is given error. after saw the issue i remove the curly bracket and solve the problem.


If you run the code in your computer flow the step:

step-1:
go with this link:
https://github.com/mahmudul607/problem-solution-react

when page is load properly you can see "<>Code" button with green color 
click on it and show you two tab 
click on the local tab 
and then click on HTTPS tab
then you find link for clone copy this link.

step-2:
go to you computer folder directory where you want to store the project code. use here command window with folder directory check properly and in command windows write 
>git clone https://github.com/mahmudul607/problem-solution-react.git

step-3:
in this command window 
>cd projectName
>npm install

step-4:
open the projec on your code editors
and if you want to run project in locally
>npm run dev
after some times give you a local address with port number open the link and show live on the browser.
>


Thanks, Pray for People.
 
