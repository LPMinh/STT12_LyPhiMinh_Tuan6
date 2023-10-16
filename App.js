import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';

export default function App() {
  var items=[
    {
      id: 1,
      image: require('./assets/ca_nau_lau.png'),
      name: 'Ca nấu lẩu, nấu mì mini',
      shop: 'devan',
    },
    {
      id: 2,
      image: require('./assets/ga_bo_toi.png'),
      name: '1KG KHÔ GÀ BƠ TỎI',
      shop: 'LTD FOOD',
    },
    {
      id: 3,
      image: require('./assets/xa_can_cau.png'),
      name: 'xe cần cẩu đa năng',
      shop: 'thế giới đồ chơi',
    },
    {
      id: 4,
      image: require('./assets/do_choi_dang_mo_hinh.png'),
      name: 'Đồ chơi dạng mô hình',
      shop: 'thế giới đồ chơi',
    },
    {
      id: 5,
      image: require('./assets/lanh_dao_gian_don.png'),
      name: 'Lãnh đạo giản đơn',
      shop: 'Minh Long Book',
    },
    {
      id: 6,
      image: require('./assets/hieu_long_con_tre.png'),
      name: 'Hiểu lòng con trẻ',
      shop: 'Minh Long Book',
    }
  ]
  return (
    <View style={styles.container}>

        <View style={[styles.header]}>
          <TouchableOpacity>
          <Image source={require('./assets/Vectorback.png')} style={{height:'24px',width:'24px'}}></Image>

          </TouchableOpacity>
          <Text style={{color:'white',fontSize:20,height:'10%'}}>Chat</Text>
          
          <TouchableOpacity>
          <Image source={require('./assets/bi_cart-check.png')} style={{height:'24px',width:'24px'}}></Image>

          </TouchableOpacity>

        </View>
        <View style={[styles.body]}>
            <Text style={{padding:10,width:'90%'}}>Bạn có thắc mắc sản phẩm vừa xem đừng ngần ngại nhắn cho shop </Text>
            <ScrollView style={[styles.itemcontainer]}>
               
            {items.map((item) => (
          <View key={item.id}  style={{width:'100%',height:'80px',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            <View style={{width:'20%'}}>
            <Image source={item.image} style={{width:"74px",height:'74px'}} />
            </View>
           
            <View style={{width:'50%'}}>
              <Text>{item.name}</Text>
              <View style={{flexDirection:'row'}}>
                <Text>Shop: </Text>
                <Text>{item.shop}</Text>
              </View>
            </View>
            <TouchableOpacity style={{backgroundColor:'#F31111',width:'88px',height:'38px',justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'white'}}>Chat</Text>
            </TouchableOpacity>
          </View>
        ))}
            </ScrollView>
        </View>
        <View style={[styles.tab]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    height:'5%',
    width:'100%',
    backgroundColor:'#1BA9FF',
    flexDirection:'row',
    justifyContent:'space-between',
    color:'white',
    paddingHorizontal:10
  },
  body:{
    widtht:'100%',
    height:'90%',
    justifyContent:'center',
    alignItems:'center'
  },
  tab:{
  height:'5%',
  width:'100%'
  },
  itemcontainer:{
    height:'90%',
    width:'100%'
  }
});
