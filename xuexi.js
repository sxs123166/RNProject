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
