'use strict';
import { I18nManager, Platform, StyleSheet, Dimensions } from 'react-native';

import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;

/// colors
export const black_color = "#000"
export const white_color = "#fff"
export const hover_color = "rgba(255,255,255,.1)"
export const bluesky_color = "rgb(54,132,196)"
export const Primary_color = "#0078b2"
export const Secondary_color = "#e99f94"
export const contentColor = '#8b8989'
export const borderColor = '#2d9bd2'
export const textInputColor = '#000'
export const vectorIconColor = '#b8b8d2'


const rtl = I18nManager.isRTL
const textDir = Platform.select({
  ios: rtl ? 'right' : 'left',
  android: rtl ? 'right' : 'left',
})
const flexDir = Platform.select({
  ios: rtl ? 'flex-start' : 'flex-end',
  android: rtl ? 'flex-start' : 'flex-end',
})


const styles = StyleSheet.create({
  back_boc: {
    width: wp(10),
    alignItems: 'center',
    justifyContent: "center",
    paddingTop: hp(1)
  },
  back_box_ii: {
    alignItems: "center",
    justifyContent: 'center'
  },
  fontmed: {
    color: white_color,
    fontSize: wp(4),
    fontWeight: '600'
  },
  fontreg: {
    color: white_color,
    fontSize: wp(3.8),
    fontWeight: '400'
  },
  LineViewI: {
    width: wp(90),
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
    marginBottom: hp(1),
    paddingVertical: hp(.5)
  },
  LineViewII: {
    width: wp(90),
    height: hp(6), flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
    paddingBottom: hp(1)
  },
  slider_view: {
    width: wp(90),
    alignItems: 'center',
    justifyContent: 'center',
  },
  showmore_View: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(1)
  },
  showless_moretext: {
    color: white_color,
    fontSize: wp(3.8),
    fontWeight: '400',
    textDecorationLine: "underline"
  },
  brands_flastlist: {
    marginVertical: hp(1), width: wp(80),
    alignSelf: 'center'
  },
  buying_formatVI: {
    height: hp(4.7),
    borderRadius: wp(2),
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    borderWidth: 1,
  },
  conditionview: {
    height: hp(4.7),
    borderRadius: wp(2),
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    borderWidth: 1,
  },
  brands_v_i: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brands_v_ii: {
    width: wp(5.5),
    height: wp(5.5),
    borderRadius: wp(1.5),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    flex: 1,
    backgroundColor: Primary_color
  },
  sec_mainView: {
    width: wp(90),
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: hp(2)
  },
  search_btn: {
    width: wp(88),
    height: hp(6.7),
    borderWidth: 1,
    borderColor: hover_color,
    shadowColor: black_color,
    shadowOffset: { width: 100, height: 100 },
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: Primary_color,
    alignSelf: 'center',
    borderRadius: wp(4),
    marginVertical: hp(2),
    elevation: 5
  }



});

export default styles;
