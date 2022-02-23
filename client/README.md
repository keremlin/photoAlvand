# photoAlvand UI (Reactjs)
photoAlvand is a open source photo store project
(Readme is under construction...)
It has :
    - picture store
    - user management
    - site management
    - multi lingual
It uses : 
    - Reactjs
    - Redux
    - i18next
    - react-router
    - Java backend

## Internationalization with i18next using Redux
I18next is an internationalization-framework written in and for JavaScript. There are several ways to use this framework. In this project, we use a file-based approach. we have i18n.js file in the root of the project that initiate the language support. For now, only two languages is added (FA, EN) but you can add more languages. In the components we used <trans> tag to find the key properly. In Redux store we put current language field. There is a language changer in header that changes the value of language in the store.
We also provides another component <H3UIT> with translation support, you just pass the key to it and it will change with the signal of Redux store.
So in real-time all text will translate to the target language.
## Redux
The project uses redux for public variables that all components and services need to use them. For local variables we use props. The store includes user data, current language and system messages.
We used createStore() to setup the store. Also there are Reducers for managing the state. Each component that want to use the state should include the state in props.
# Effects and Animations
MUi is used to component transitions. We used slider and fade effects in this project. You can find out more about this in this link <a href="https://mui.com/components/transitions/"> Transitions </a>. Slider component is created to handle effects of component that handle all actions. In this case we show "loading" until underlying component is loaded then we do the effect.
# Carousel UI

# OnLoad() Images

# Form validation


