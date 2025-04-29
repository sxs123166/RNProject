// 容器组件 View：顾名思义它就是一个容器，可以用来包裹其他的组件，类似于 Web 中用于嵌套的 div；
// 文字组件 Text：设计稿中的文字，比如水果名字“苹果”、“梨子”，价格“1 元”、“3 元”等等，这些类似于 Web 中装载文字的 span。
// 安全区域组件 SafeAreaView：它是最外层的容器组件，用于适配 iPhoneX 等的刘海儿屏。

// 导入举例
import {Text} from 'react-native';
const element1 = '苹果' // JSX const element2 = 火龙果 // JSX


export default function Product({product = {name: '苹果', price: '1元'}}) {
    return (
      <View style={{flexDirection: 'row', marginTop: 5}}>
        <Text style={{flex: 1}}>{product.name}</Text>
        <Text style={{width: 50}}>{product.price}</Text>
      </View>
    );
}

// 第一步，导出组件。还记得单一责任原则吗？
// 一个组件的责任要单一，一个文件的责任也要单一。
// 因此通常一个文件中只有一个组件，用export default就可以将它导出，让其他文件import引入使用。
// 第二步，定义函数。组件是一种特殊的函数。组件名字的首字母一定是大写的，示例中的Product是组件，因此它的 P是大写的（当然，还有类组件，但用得会越来越少，这里我们不探讨，你可以自己额外搜些资料）。
// 第三步，接收入参。组件能从其父组件中接参数，而且组件是函数，因此该参数就是函数的入参，通常命名为属性 props。props 是一个对象，因此也可以直接对它进行解构，直接获取对象中的值。示例代码中用的就是用解构的方式来获取参数的，它直接获取了product参数，这里的product 是数据因此p是小写的。
// 第四步，返回 JSX。组件的返回值就是 JSX，我们前面也提到过，它是用来描述 UI 页面的，JSX 最终生成的是视图元素、文字元素。这里我们初始化了一个元素，和两个元素。

// flex 
<View style={{flexDirection: 'row'}}>
  <Image
    style={{width: 100, height: 100}}
    source={{
    uri: 'https://placeimg.com/640/480/cats',
  }}
  />
  <Text style={{flex: 1,fontSize: 18}}>我是文字</Text>
</View>

//文字对齐
<View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      // 高度确定
      height: 60,
      borderWidth: 1,
    }}>
    <Text
      style={{
        fontSize: 18,
        // 文字默认内边距，会导致垂直居中偏下
        includeFontPadding: false,
        // 文字默认基于基线对齐，会导致垂直居中偏下
        textAlignVertical: 'center',
      }}>
    我是文字1
    </Text>
</View>

// JSX 结构
<View
      hitSlop={hitSlop}
      onLayout={handleLayout}
    style={styles.container}>
    <Text style={styles.texts}>我是文字1</Text>
    <Text style={styles.texts}>我是文字2</Text>
</View>

// 样式表
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderWidth: 1,
  },
  texts: {
    fontSize: 18,
    includeFontPadding: false,
    textAlignVertical: 'center',
  }
});

import React, {useState} from 'react';

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [requestStatus, setRequestStatus] = useState('IDLE');
  // ...
}

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
      <Button title="-" onPress={() => setCount(count - 1 >=0? count - 1: 0)} />
    </View>
)};

const [countObject, setCountObject] = useState({num: 0});
const [countArray, setCountArray] = useState([0]);


setCountObject({...countObject, num: countObject.num+1});

const newCountArray = [...newCountArray]
newCountArray[0]++;
setCountArray(newCountArray)

// 更新状态
// 推荐阅读
// https://react.dev/learn/updating-objects-in-state
// https://react.dev/learn/reacting-to-input-with-state
// https://react.dev/learn/updating-arrays-in-state
const countObject = {num: 0}
setCountObject({...countObject, num: countObject.num+1});

const newCountArray = [...newCountArray]
newCountArray[0]++;
setCountArray(newCountArray)


// 本地图片
// 方案一：正确
const dianxinIcon = require('./dianxin.jpg')
<Image source={dianxinIcon}/>

// 网络图片（Network Images）指的是使用 http/https 网络请求加载远程图片的方式。
// 在使用网络图片时，我建议你将宽高属性作为一个必填项来处理。
// 为什么呢？和前面介绍的静态图片资源不同的是，网络图片下载下来之前，React Native 是没法知道图片的宽高的，所以它只能用默认的 0 作为宽高。这个时候，如果你没有填写宽高属性，初始化默认宽高是 0，网络图片就展示不了。
// 建议
<Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} />
// 图片预加载接口
Image.prefetch(url);


// 也就是说，函数 Image.prefetch 接收一个参数 url，也就是图片的远程地址，函数调用后，React Native 会帮你在后台进行下载和缓存图片。这样，你下拉加载的图片时，网络图片是从本地缓存中加载的，就感受不到网络加载的耗时过程了。




// 宿主应用图片（Images From Hybrid App’s Resources​）指的是 React Native 使用 Android/iOS 宿主应用的图片进行加载的方式。在 React Native 和 Android/iOS 混合应用中，也就是一部分是原生代码开发，一部分是 React Native 代码开发的情况下，你可能会用到这种加载方式。
// 但在实际工作中，我不推荐你在 React Native 中使用宿主应用图片资源。

// Base64 图片
// Base64 指的是一种基于 64 个可见字符表示二进制数据的方式，Base64 图片指的是使用 Base64 编码加载图片的方法，它适用于那些图片体积小的场景。
<Image
  source={{
    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
  }}
/>
// 通常我们看的图片资源 .jpg、.png 都是二进制格式的，二进制格式的图片是以独立文件存在的。而 Base64 图片并不是单独图片文件，而是以文本形式存在 .js 文件中的。字符串是可以嵌套到 .js 文件中的，因此 Base64 图片也可以嵌入到 .js 文件中。在线上，Base64 图片是嵌套在 Bundle 文件中的，在加载 React Native 页面的同时，Base64 字符串也能很快地解析成真正的图片，并展示出来。
// 由于 Base64 图片是嵌套在 Bundle 文件中的，所以 Base64 图片的优点是无需额外的网络请求展示快，缺点是它会增大 Bundle 的体积。 在动态更新的 React Native 应用中，Base64 图片展示快是以 React Native 页面整体加载慢为代价的。原因就是它会增加 Bundle 的体积，增加 Bundle 的下载耗时，从而导致 React Native 页面展示变慢。
// Base64 图片只适合用在体积小的图片或关键的图片上。

// 缓存更优方案：https://github.com/DylanVann/react-native-fast-image

