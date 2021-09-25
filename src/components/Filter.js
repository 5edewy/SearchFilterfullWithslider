import React, { Component } from 'react';
import {
    View, Text, ScrollView, FlatList, TouchableOpacity,
    LayoutAnimation, Platform, UIManager,
} from 'react-native';
import styles, {
    Primary_color, wp, hp,
    borderColor, white_color,
    hover_color, black_color
} from './Assets/style/styles';
import { VectorIcon } from './Assets/common';
import {
    Brand_data, Byuingformat_data,
    Category_data, Condition_data
} from './Data';
import RangeSlider from './RangeSlider';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buing_format_show: false, buing_format: null,
            condition_show: false, condition: null,
            Category_show: false, category: null,
            price_show: false, min_price: 150, max_price: 3500,
            quantity_show: false, min_quantity: 20, max_quantity: 50,
            seller_rate: 3, seller_rate_show: false,
            selectedbrand_id: [], inialbranddata: Brand_data.slice(0, 5),
            showmorebrands: false,
            brand_show: false, brands_selected: [],
            buyingformatdate: '', conditiondata: '',
            categorydata: '', materialshow: false

        };

    }

    _render_buying_format = ({ item, index }) => {
        const { buing_format } = this.state;
        const bg_color = buing_format == index ? hover_color : Primary_color
        return (
            <TouchableOpacity
                activeOpacity={.9}
                onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                    this.setState({
                        buing_format: index, buyingformatdate: item.title
                    })
                }}
            >
                <View style={{
                    ...styles.buying_formatVI,
                    borderColor: borderColor,
                    backgroundColor: bg_color,
                }}>
                    {buing_format == index ? <VectorIcon
                        style={{
                            marginHorizontal: wp(1)
                        }}
                        name="check"
                        type="Entypo"
                        color={white_color}
                        size={15}
                    />
                        : null}
                    <Text style={styles.fontreg}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _render_condition = ({ item, index }) => {
        const { condition } = this.state;
        const bg_color = condition == index ? hover_color : Primary_color
        return (
            <TouchableOpacity
                activeOpacity={.9}
                onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                    this.setState({
                        condition: index, conditiondata: item.title
                    })
                }}
            >
                <View style={{
                    ...styles.conditionview,
                    borderColor: borderColor,
                    backgroundColor: bg_color,
                }}>
                    {condition == index ? <VectorIcon
                        style={{
                            marginHorizontal: wp(1)
                        }}
                        name="check"
                        type="Entypo"
                        color={white_color}
                        size={15}
                    />
                        : null}
                    <Text style={styles.fontreg}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _render_category = ({ item, index }) => {
        const { category } = this.state;
        const bg_color = category == index ? hover_color : Primary_color
        return (
            <TouchableOpacity
                activeOpacity={.9}
                onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                    this.setState({
                        category: index, categorydata: item.title
                    })
                }}
            >
                <View style={{
                    ...styles.conditionview,
                    borderColor: borderColor,
                    backgroundColor: bg_color,
                }}>
                    {category == index ? <VectorIcon
                        style={{
                            marginHorizontal: wp(1)
                        }}
                        name="check"
                        type="Entypo"
                        color={white_color}
                        size={15}
                    />
                        : null}
                    <Text style={styles.fontreg}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _render_brand = ({ item, index }) => {
        const { selectedbrand_id } = this.state;
        let check = selectedbrand_id.includes(item.id)

        const bg_color = check ? white_color : Primary_color
        return (
            <TouchableOpacity
                activeOpacity={.77}
                onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                    this._onUpdate_brand(item)
                }}
            >
                <View style={styles.brands_v_i}>
                    <View style={{
                        ...styles.brands_v_ii,
                        borderColor: hover_color,
                        backgroundColor: bg_color,
                    }}>
                        {check ? <VectorIcon
                            name={"check"}
                            type="AntDesign"
                            color={Primary_color}
                            size={15}
                        /> : null}
                    </View>
                    <View style={{ marginHorizontal: wp(2) }}>
                        <Text style={styles.fontmed}>{item.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.fontreg}>({item.Num})</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    _onUpdate_brand = (item) => {

        const { selectedbrand_id, brands_selected } = this.state;
        const ind = selectedbrand_id.indexOf(item.id)

        if (ind == -1) {
            selectedbrand_id.push(item.id)
            brands_selected.push(item.title)

        } else {
            selectedbrand_id.splice(ind, 1)
            brands_selected.splice(item.title)

        }
        this.setState({ selectedbrand_id, brands_selected })

    }


    _handle_linePress = (flag) => {
        const { buing_format_show,
            condition_show, Category_show,
            price_show, quantity_show,
            seller_rate_show, brand_show,
            materialshow
        } = this.state

        const initial = {
            buing_format_show: false,
            condition_show: false,
            Category_show: false,
            price_show: false,
            quantity_show: false,
            seller_rate_show: false,
            brand_show: false,
            materialshow: false

        }
        if (flag === 'byingformat') {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.setState({
                ...initial, buing_format_show: !buing_format_show,
            })
        } else if (flag === 'condition') {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.setState({
                ...initial, condition_show: !condition_show,
            })
        } else if (flag === 'Category') {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.setState({
                ...initial, Category_show: !Category_show,
            })
        } else if (flag === 'price') {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.setState({
                ...initial, price_show: !price_show,
            })
        } else if (flag === 'quantity') {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.setState({
                ...initial, quantity_show: !quantity_show,
            })
        } else if (flag === 'sellerrate') {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.setState({
                ...initial, seller_rate_show: !seller_rate_show,
            })
        } else if (flag === 'brand') {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.setState({
                ...initial, brand_show: !brand_show,
            })
        } else if (flag === 'material') {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.setState({
                ...initial, materialshow: !materialshow,
            })
        }

    }
    _brands_footer = () => {
        const { showmorebrands } = this.state
        return (
            <TouchableOpacity
                activeOpacity={.8}
                onPress={() => this._handle_shoMorebrands(showmorebrands)}
            >
                {showmorebrands ? <View style={styles.showmore_View}>
                    <Text style={styles.showless_moretext}>
                        Show less
                    </Text>

                </View>
                    :
                    <View style={styles.showmore_View}>
                        <Text style={styles.showless_moretext}
                        >View all
                        </Text>
                        <Text style={{
                            ...styles.fontreg,
                            marginHorizontal: wp(1)
                        }}>({Brand_data.length})</Text>
                    </View>}
            </TouchableOpacity>
        )
    }

    _handle_shoMorebrands = (flag) => {
        const { showmorebrands } = this.state
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({

            showmorebrands: !showmorebrands
        })

    }

    _start_search = () => {
        const { buyingformatdate, conditiondata,
            categorydata, min_price, max_price,
            min_quantity, max_quantity,
            seller_rate, brands_selected } = this.state
        const data = {
            Byuyingformat: buyingformatdate,
            Condition: conditiondata,
            category: categorydata,
            minprice: min_price,
            maxprice: max_price,
            minquantity: min_quantity,
            max_quantity: max_quantity,
            sellerrate: seller_rate,
            brands: brands_selected,
            materials: '',
            size: '',
            productswithwarranty: '',
            postswithdiscounts: ''
        }
        alert(JSON.stringify(data))
    }
    render() {
        // STATE:
        const { buing_format_show, condition_show, Category_show,
            min_price, max_price, price_show,
            quantity_show, min_quantity, max_quantity, seller_rate_show, seller_rate,
            inialbranddata, brand_show, materialshow,
            showmorebrands } = this.state;

        // Icons:
        const open = "keyboard-arrow-down"
        const close = "keyboard-arrow-up"
        return (
            <View style={styles.mainView}>
                <ScrollView
                    scrollEventThrottle={16}
                >

                    <View style={styles.sec_mainView}>

                        {/* Buyingformat */}
                        <View style={styles.LineViewI}>
                            <TouchableOpacity
                                activeOpacity={.8}
                                onPress={() => this._handle_linePress('byingformat')}
                            >
                                <View style={styles.LineViewII}>
                                    <Text style={styles.fontmed} >Buying format</Text>
                                    <VectorIcon
                                        name={buing_format_show ? close : open}
                                        type="MaterialIcons"
                                        color={white_color}
                                        size={22}
                                    />
                                </View>
                            </TouchableOpacity>
                            {buing_format_show ? <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                scrollEventThrottle={16}
                                key={'#'}
                                style={{ marginVertical: hp(1) }}
                                contentContainerStyle={{ alignItems: 'center' }}
                                ItemSeparatorComponent={() => <View style={{ width: wp(2) }} />}
                                data={Byuingformat_data}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={this._render_buying_format}
                            />
                                : null}

                        </View>

                        {/* Condition */}
                        <View style={styles.LineViewI}>
                            <TouchableOpacity
                                activeOpacity={.8}
                                onPress={() => this._handle_linePress('condition')}
                            >
                                <View style={styles.LineViewII}>
                                    <Text style={styles.fontmed} >Condition</Text>
                                    <VectorIcon
                                        name={condition_show ? close : open}
                                        type="MaterialIcons"
                                        color={white_color}
                                        size={22}
                                    />
                                </View>
                            </TouchableOpacity>
                            {condition_show ? <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                scrollEventThrottle={16}
                                key={'##'}
                                style={{ marginVertical: hp(1) }}
                                contentContainerStyle={{ alignItems: 'center' }}
                                ItemSeparatorComponent={() => <View style={{ width: wp(2) }} />}
                                data={Condition_data}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={this._render_condition}
                            />
                                : null}

                        </View>

                        {/* Category */}
                        <View style={styles.LineViewI}>
                            <TouchableOpacity
                                activeOpacity={.8}
                                onPress={() => this._handle_linePress('Category')}
                            >
                                <View style={styles.LineViewII}>
                                    <Text style={styles.fontmed} >Category</Text>
                                    <VectorIcon
                                        name={Category_show ? close : open}
                                        type="MaterialIcons"
                                        color={white_color}
                                        size={22}
                                    />
                                </View>
                            </TouchableOpacity>
                            {Category_show ? <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                scrollEventThrottle={16}
                                key={'##'}
                                style={{ marginVertical: hp(1) }}
                                contentContainerStyle={{ alignItems: 'center' }}
                                ItemSeparatorComponent={() => <View style={{ width: wp(2) }} />}
                                data={Category_data}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={this._render_category}
                            />
                                : null}

                        </View>

                        {/* Price */}
                        <View style={styles.LineViewI}>
                            <TouchableOpacity
                                activeOpacity={.8}
                                onPress={() => this._handle_linePress('price')}
                            >
                                <View style={styles.LineViewII}>
                                    <Text style={styles.fontmed} >Price</Text>
                                    <VectorIcon
                                        name={price_show ? close : open}
                                        type="MaterialIcons"
                                        color={white_color}
                                        size={22}
                                    />
                                </View>
                            </TouchableOpacity>

                            {price_show ? <View style={styles.slider_view}>
                                <RangeSlider
                                    tint_bumb_color={Primary_color}
                                    getMaxValue={(min_price) => this.setState({ min_price })}
                                    getMinValue={(max_price) => this.setState({ max_price })}
                                    min_initVal={min_price}
                                    max_initVal={max_price}
                                    maxBoundary={5000}
                                    text_label_color={white_color}
                                    track_color={white_color}
                                />
                            </View>
                                : null}

                        </View>

                        {/* Quantity */}
                        <View style={styles.LineViewI}>
                            <TouchableOpacity
                                activeOpacity={.8}
                                onPress={() => this._handle_linePress('quantity')}
                            >
                                <View style={styles.LineViewII}>
                                    <Text style={styles.fontmed} >Quantity</Text>
                                    <VectorIcon
                                        name={quantity_show ? close : open}
                                        type="MaterialIcons"
                                        color={white_color}
                                        size={22}
                                    />
                                </View>
                            </TouchableOpacity>

                            {quantity_show ? <View style={styles.slider_view}>
                                <RangeSlider
                                    tint_bumb_color={Primary_color}
                                    getMaxValue={(min_quantity) => this.setState({ min_quantity })}
                                    getMinValue={(max_quantity) => this.setState({ max_quantity })}
                                    min_initVal={min_quantity}
                                    max_initVal={max_quantity}
                                    maxBoundary={100}
                                    text_label_color={white_color}
                                    track_color={white_color}
                                />
                            </View>
                                : null}

                        </View>
                        {/* Seller_rate */}
                        <View style={styles.LineViewI}>
                            <TouchableOpacity
                                activeOpacity={.8}
                                onPress={() => this._handle_linePress('sellerrate')}
                            >
                                <View style={styles.LineViewII}>
                                    <Text style={styles.fontmed} >Seller rate</Text>
                                    <VectorIcon
                                        name={seller_rate_show ? close : open}
                                        type="MaterialIcons"
                                        color={white_color}
                                        size={22}
                                    />
                                </View>
                            </TouchableOpacity>

                            {seller_rate_show ? <View style={styles.slider_view}>
                                <RangeSlider
                                    disablemin
                                    hidemin
                                    tint_bumb_color={Primary_color}
                                    getMaxValue={(seller_rate) => this.setState({ seller_rate })}
                                    min_initVal={0}
                                    max_initVal={seller_rate}
                                    maxBoundary={5}
                                    text_label_color={white_color}
                                    track_color={white_color}
                                />
                            </View>
                                : null
                            }

                        </View>
                        {/* Brand */}
                        <View style={styles.LineViewI}>
                            <TouchableOpacity
                                activeOpacity={.8}
                                onPress={() => this._handle_linePress('brand')}
                            >
                                <View style={styles.LineViewII}>
                                    <Text style={styles.fontmed} >Brand</Text>
                                    <VectorIcon
                                        name={brand_show ? close : open}
                                        type="MaterialIcons"
                                        color={white_color}
                                        size={22}
                                    />
                                </View>
                            </TouchableOpacity>

                            {brand_show ? <FlatList
                                showsHorizontalScrollIndicator={false}
                                scrollEventThrottle={16}
                                key={'#_#'}
                                style={styles.brands_flastlist}
                                contentContainerStyle={{ alignItems: "flex-start" }}
                                ItemSeparatorComponent={() => <View style={{ height: hp(1) }} />}
                                data={showmorebrands ? Brand_data : inialbranddata}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={this._render_brand}
                                ListFooterComponent={this._brands_footer}
                            /> : null}


                        </View>

                        {/* Material */}
                        <View style={styles.LineViewI}>
                            <TouchableOpacity
                                activeOpacity={.8}
                                onPress={() => this._handle_linePress('material')}
                            >
                                <View style={styles.LineViewII}>
                                    <Text style={styles.fontmed} >Material</Text>
                                    <VectorIcon
                                        name={materialshow ? close : open}
                                        type="MaterialIcons"
                                        color={white_color}
                                        size={22}
                                    />
                                </View>
                            </TouchableOpacity>

                            {materialshow ? <Text style={styles.fontmed}>Select Material</Text> : null}
                        </View>
                        {/* Size */}
                        <View style={styles.LineViewI}>
                            <TouchableOpacity
                                activeOpacity={.8}
                            >
                                <View style={styles.LineViewII}>
                                    <Text style={styles.fontmed} >Size</Text>
                                    <VectorIcon
                                        name={open}
                                        type="MaterialIcons"
                                        color={white_color}
                                        size={22}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* Products with warranty */}
                        <View style={styles.LineViewI}>
                            <TouchableOpacity
                                activeOpacity={.8}
                            >
                                <View style={styles.LineViewII}>
                                    <Text style={styles.fontmed} >Products with warranty</Text>
                                    <VectorIcon
                                        name={open}
                                        type="MaterialIcons"
                                        color={white_color}
                                        size={22}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* Posts with discounts */}
                        <View style={styles.LineViewI}>
                            <TouchableOpacity
                                activeOpacity={.8}
                            >
                                <View style={styles.LineViewII}>
                                    <Text style={styles.fontmed} >Posts with discounts</Text>
                                    <VectorIcon
                                        name={open}
                                        type="MaterialIcons"
                                        color={white_color}
                                        size={22}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <TouchableOpacity
                        activeOpacity={.9}
                        onPress={() => this._start_search()}
                    >
                        <View style={styles.search_btn}>
                            <Text style={styles.fontmed}>Search</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

            </View>
        );
    }
}

export default Filter;

