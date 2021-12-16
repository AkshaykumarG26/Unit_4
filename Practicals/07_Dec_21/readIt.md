------------- OAuth -------------

oauth is nothing but u r using someones log in system to login ur user (to authenticate ur user)

link =>  https://www.passportjs.org/packages/passport-google-oauth2/



link => https://console.cloud.google.com/home/dashboard?project=keen-scion-210707

go to this website and top right corner *create a project* next to google cloud platform and then select project and then go to *consent screen* u will see two options there internal and external might be internal will not be availablle if u provide org then might be u will be able to select bcoz it will only allow org mails so select *external* then click on create then only save and continue and then last go to *credentials*  then click on *create credential* -> *auth clint id* -> application type should be *web application* -> and then *Authorized JavaScript origins* -> enter ur uri for example i have enxtered *http://localhost:1234* -> *Authorized redirect URIs* enetr uri as i have eneterd this *http://localhost:1234/auth/google/callback* -> and then create so it will have *client id* and *client secret* copy them and paste in .env file








npm init -y
npm install express --save
npm i mongoose
npm i dotenv
npm i passport
npm i jsonwebtoken
npm install passport-google-oauth2
npm install uuidv4
npm i bcryptjs