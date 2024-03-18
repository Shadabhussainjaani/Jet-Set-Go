import React from 'react';
import {
  TouchableOpacity,
  useColorScheme,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Text from '@src/components/text/Text.jsx';
import Entypo from 'react-native-vector-icons/Entypo';
const Tabbar = props => {
  const { navigation, state } = props;
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);

  const data = [
    {
      iconName: 'home',
      name: 'Home',
      router: 'Home',
      isShow: true,
    },
  ];

  const visit = state.index;
  return (
    <>
      <SafeAreaView
        forceInset={{ bottom: 'always' }}
        style={[styles.container]}>
        {data.map((tab, index) =>
          tab.isShow ? (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => navigation.navigate(tab.router)}>
              <Entypo
                color={visit === index ? '#009DAC' : 'grey'}
                name={tab?.iconName}
                size={25}
              />
              <Text
                style={[
                  styles.text,
                  {
                    color: visit === index ? '#009DAC' : 'grey',
                  },
                ]}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          ) : null,
        )}
      </SafeAreaView>
    </>
  );
};

const getStyles = isDarkMode => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 50,
      backgroundColor: isDarkMode ? '#000000' : '#ffffff',
      borderTopWidth: 0.5,
      // elevation: 5,
    },
    item: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 7,
    },
    text: {
      fontSize: 12,
      lineHeight: 15,
      // marginTop: 5,
    },
  });
};

// const mapStateToProps = state => {
//   return {
//     configs: configsSelector(state),
//   };
// };

export default Tabbar;
// export default connect(mapStateToProps)(withTranslation()(Tabbar));
