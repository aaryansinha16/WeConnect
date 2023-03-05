## we-connect
# FEATURES IMPLEMENTED:
* End to End encryption done (users messeges do not go to server side directly, they are encrypted with a key which is only accessable to client side. They are only decrypted once the messeges are fetched in client side using the key which was used for encrypting it)
* Messenging DONE
* Single/Group chat DONE
* Authentication (JWT + cookies)
* Responsiveness Done
* Profile Images using cloudinary (Users can upload their profile images)
* Searching users from database 
* Debouncing (a debounce of 500ms is implemented in search results)
* Context API 
* Creating groups in individual chats
* Loading indicators 
* Dark/Light themes
* Chat update time is dynamic

## Features to implement(remaining) : 
* Notifications (backend/frontend)
* Read / unread / groups catagory wise display of chats (frontend)

[![encrypt][encryption]]()
[![abc][dark]]()
[![lig][light]]()
[![chatP][chatPage]]()
[![src][search]]()
[![grp][group]]()

## Todays Todo: 
* Notifications
* Cookies
* Prevent Re-renders (useMemo, useCallBack's)
* Profile Modal


[dark]: /frontend/src/assets/dark.png
[light]: /frontend/src/assets/light.png
[search]: /frontend/src/assets/search.png
[group]: /frontend/src/assets/group.png
[chatPage]: /frontend/src/assets/chatPage.png
[encryption]: /frontend/src/assets/encryption.png