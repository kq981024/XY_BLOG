---
title: ReactNative工具库
date: 2023-10-11
tags:
  - ReactNative
categories:
  - React
---

### 前言

​		React Native的强大生态不仅仅体现在其原生组件上，第三方的开源组件也可以极大丰富开发者的工具包，为应用添加独特的功能和样式提供更多可能性。前人造轮，后人开车。以下是日常开发中常用的第三方组件以及使用示例，不定期更新，欢迎参考。

------

### react-navigation

​		`react-navigation` 提供了应用导航的解决方案，包括堆栈导航、底部标签导航、抽屉导航。[详情](https://reactnavigation.org/)

```tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/login';
import Home from './screens/home';

const Stack = createNativeStackNavigator();
//  路由栈  可以通过 useNavigation 进行路由的跳转以及传参
const router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default router;
```

------

### react-native-vector-icons

​		`react-native-vector-icons` 是一个涵盖了多个图标集合的组件库，如FontAwesome、MaterialIcons等，[详情](https://github.com/oblador/react-native-vector-icons)

- Android配置：拷贝以下代码到`android/app/build.gradle`中,即可正常使用

  ```java
  apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
  ```

- 案例：

```tsx
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <Icon name="rocket" size={30} color="#900" />
  );
};

export default App;
```

------

### react-native-swiper

​		`react-native-swiper` 提供了滑动组件，用以构建引导页面或图片轮播。[详情](https://github.com/leecade/react-native-swiper)

```tsx
import Swiper from 'react-native-swiper';

const App = () => {
  return (
    <Swiper>
      <View>
        <Text>图片一</Text>
      </View>
      <View>
        <Text>图片二</Text>
      </View>
      <View>
        <Text>图片三</Text>
      </View>
    </Swiper>
  );
};
export default App
```

------

### react-native-splash-screen

​		`react-native-splash-screen` 用于控制应用的启动屏幕，增加用户体验。

- Android配置：

  - 修改文件`android/app/src/main/java/com/项目名称/MainActivity.java`

    ![](https://cdn.jsdelivr.net/gh/kq981024/Media/202406131817965.png)

  - 添加启动图片`android/app/src/mian/res/drawable-*`，新增文件夹drawable-hdpi 、drawable-ldpi、drawable-mdpi、drawable-xhdpi、drawable-xxhdpi、drawable-xxxhdpi，这些文件夹下面都增加图片`launch_screen`

    ![](https://cdn.jsdelivr.net/gh/kq981024/Media/202406131821932.png)

  - 在 `android/app/src/mian/res`目录下创建`layout`文件夹，并在创建的`layout`文件夹中创建`launch_screen.xml`

    ![](https://cdn.jsdelivr.net/gh/kq981024/Media/202406131824765.png)

  - 如果启动时出现白屏在在 `android/app/src/mian/res/values/styles.xml`中增加一行

    ![](https://cdn.jsdelivr.net/gh/kq981024/Media/202406131828996.png)

------

### react-native-image-picker

​		`react-native-image-picker` 用于从设备相册或者相机中选择图片或视频，[详见](https://github.com/react-native-image-picker/react-native-image-picker)。需要注意android和ios的兼容



------

### react-native-gesture-handler

​	`react-native-gesture-handler` 提供了原生触摸和手势系统，与react-navigation等库搭配使用，提升用户使用体感

![](https://cdn.jsdelivr.net/gh/kq981024/Media/202406131920641.png)

### 