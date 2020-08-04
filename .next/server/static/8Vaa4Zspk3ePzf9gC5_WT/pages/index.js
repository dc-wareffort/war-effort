module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Index; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./assets/js/mock.json
var mock = __webpack_require__("cwSO");

// CONCATENATED MODULE: ./assets/js/gson.js


async function getData(sheetsURL) {
  const gson = "https://gson.fayazara.now.sh/?url=https://docs.google.com/spreadsheets/d/e/2PACX-1vT6-XSxmzjwS6tA1rbT8YVp0hUG7Gnat4hT_H1_ti0hNTdnCE7J9R3YUI5peuGqLPc6dDqhFUH13dfj/pub?output=csv";
  const grab = await external_axios_default()(gson); //return grab.data;

  const data = grab.data;
  return transformData(data); // return mock;
}

function transformData(data) {
  res = [{
    key: 'ally-total'
  }, {
    key: 'ally-current'
  }, {
    key: 'horde-total'
  }, {
    key: 'horde-current'
  }];

  for (row of data) {
    res[0][row.item1] = row['ally-total'];
    res[1][row.item1] = row['ally-current'];
    res[2][row.item2] = row['horde-total'];
    res[3][row.item2] = row['horde-current'];
  }

  return res;
} // old gson link
// const gson = `https://gson.fayazara.now.sh?url=${sheetsURL}`;
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Layout.js
var __jsx = external_react_default.a.createElement;


class Layout_Layout extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx(external_react_["Fragment"], null, __jsx(head_default.a, null, __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), __jsx("title", null, "AQ War Effort"), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@300;400;700&display=swap",
      rel: "stylesheet"
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "css/reset.css"
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "css/styles.css"
    })), this.props.children, __jsx("script", {
      src: "https://wow.zamimg.com/widgets/power.js",
      async: true
    }));
  }

}
// CONCATENATED MODULE: ./assets/js/TableClass.js
class Table {
  constructor(csv) {
    this.sumTotal = parseInt(csv['Total']);
    this.copperBar = parseInt(csv['Copper Bar']);
    this.tinBar = parseInt(csv['Tin Bar']);
    this.ironBar = parseInt(csv['Iron Bar']);
    this.thoriumBar = parseInt(csv['Thorium Bar']);
    this.mithrilBar = parseInt(csv['Mithril Bar']);
    this.lightLeather = parseInt(csv['Light Leather']);
    this.mediumLeather = parseInt(csv['Medium Leather']);
    this.heavyLeather = parseInt(csv['Heavy Leather']);
    this.thickLeather = parseInt(csv['Thick Leather']);
    this.ruggedLeather = parseInt(csv['Rugged Leather']);
    this.linenBandage = parseInt(csv['Linen Bandages']);
    this.woolBandage = parseInt(csv['Wool Bandages']);
    this.silkBandage = parseInt(csv['Silk Bandages']);
    this.mageBandage = parseInt(csv['Mageweave Bandages']);
    this.runeclothBandage = parseInt(csv['Runecloth Bandages']);
    this.peacebloom = parseInt(csv['Peacebloom']);
    this.stranglekelp = parseInt(csv['Stranglekelp']);
    this.purpleLotus = parseInt(csv['Purple Lotus']);
    this.firebloom = parseInt(csv['Firebloom']);
    this.arthasTear = parseInt(csv["Arthas' Tears"]);
    this.roastRaptor = parseInt(csv['Roast Raptor']);
    this.leanWolf = parseInt(csv['Lean Wolf Steak']);
    this.rainbowFin = parseInt(csv['Rainbow Fin Albacore']);
    this.spottedYellowtail = parseInt(csv['Spotted Yellowtail']);
    this.bakedSalmon = parseInt(csv['Baked Salmon']);
  }

}
// CONCATENATED MODULE: ./components/Hero.js
var Hero_jsx = external_react_default.a.createElement;

class Hero_Hero extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return Hero_jsx(external_react_["Fragment"], null, Hero_jsx("section", {
      id: "hero"
    }, Hero_jsx("h1", null, "AQ War Effort"), Hero_jsx("h3", null, "Dragon's Call"), Hero_jsx("h4", null, "Last Updated: ", this.props.date)));
  }

}
// CONCATENATED MODULE: ./components/Item.js
var Item_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Item_Item extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "formatNumber", rawNum => {
      return Number(parseFloat(rawNum).toFixed(0)).toLocaleString('en', {
        minimumFractionDigits: 0
      });
    });
  }

  render() {
    const styles = {
      prog: {
        width: `${Math.floor(this.props.current / this.props.total * 100)}%`
      }
    };
    return Item_jsx(external_react_["Fragment"], null, Item_jsx("div", {
      className: "item"
    }, Item_jsx("a", {
      href: `https://classic.wowhead.com/item=${this.props.id}/`,
      "data-wowhead": `item=${this.props.id}`
    }, Item_jsx("img", {
      src: `https://wow.zamimg.com/images/wow/icons/large/${this.props.pic}`
    })), Item_jsx("span", {
      className: "percent"
    }, Math.floor(this.props.current / this.props.total * 100)), Item_jsx("div", {
      className: "meter"
    }, Item_jsx("span", {
      className: "progress",
      style: styles.prog
    }, this.formatNumber(this.props.current), " /", ' ', this.formatNumber(this.props.total)))));
  }

}
// CONCATENATED MODULE: ./components/Ally.js
var Ally_jsx = external_react_default.a.createElement;


class Ally_Ally extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      prog: {
        width: `${Math.floor(this.props.table.current.sumTotal / this.props.table.total.sumTotal * 100)}%`
      }
    };
    return Ally_jsx(external_react_["Fragment"], null, Ally_jsx(Item_Item, {
      pic: 'inv_bannerpvp_02.jpg',
      id: 21436,
      total: this.props.table.total.sumTotal,
      current: this.props.table.current.sumTotal
    }), Ally_jsx("hr", null), Ally_jsx(Item_Item, {
      pic: 'inv_ingot_02.jpg',
      id: 2840,
      total: this.props.table.total.copperBar,
      current: this.props.table.current.copperBar
    }), Ally_jsx(Item_Item, {
      pic: 'inv_misc_leatherscrap_08.jpg',
      id: 4304,
      total: this.props.table.total.thickLeather,
      current: this.props.table.current.thickLeather
    }), Ally_jsx(Item_Item, {
      pic: 'inv_misc_bandage_11.jpg',
      id: 14529,
      total: this.props.table.total.runeclothBandage,
      current: this.props.table.current.runeclothBandage
    }), Ally_jsx(Item_Item, {
      pic: 'inv_misc_herb_17.jpg',
      id: 8831,
      total: this.props.table.total.purpleLotus,
      current: this.props.table.current.purpleLotus
    }), Ally_jsx(Item_Item, {
      pic: 'inv_misc_fish_01.jpg',
      id: 6887,
      total: this.props.table.total.spottedYellowtail,
      current: this.props.table.current.spottedYellowtail
    }), Ally_jsx("hr", null), Ally_jsx(Item_Item, {
      pic: 'inv_misc_bandage_15.jpg',
      id: 1251,
      total: this.props.table.total.linenBandage,
      current: this.props.table.current.linenBandage
    }), Ally_jsx(Item_Item, {
      pic: 'inv_misc_bandage_01.jpg',
      id: 6450,
      total: this.props.table.total.silkBandage,
      current: this.props.table.current.silkBandage
    }), Ally_jsx(Item_Item, {
      pic: 'inv_misc_fish_27.jpg',
      id: 5095,
      total: this.props.table.total.rainbowFin,
      current: this.props.table.current.rainbowFin
    }), Ally_jsx(Item_Item, {
      pic: 'inv_misc_food_50.jpg',
      id: 12210,
      total: this.props.table.total.roastRaptor,
      current: this.props.table.current.roastRaptor
    }), Ally_jsx(Item_Item, {
      pic: 'inv_misc_herb_11.jpg',
      id: 3820,
      total: this.props.table.total.stranglekelp,
      current: this.props.table.current.stranglekelp
    }), Ally_jsx(Item_Item, {
      pic: 'inv_misc_herb_13.jpg',
      id: 8836,
      total: this.props.table.total.arthasTear,
      current: this.props.table.current.arthasTear
    }), Ally_jsx(Item_Item, {
      pic: 'inv_ingot_iron.jpg',
      id: 3575,
      total: this.props.table.total.ironBar,
      current: this.props.table.current.ironBar
    }), Ally_jsx(Item_Item, {
      pic: 'inv_ingot_07.jpg',
      id: 12359,
      total: this.props.table.total.thoriumBar,
      current: this.props.table.current.thoriumBar
    }), Ally_jsx(Item_Item, {
      pic: 'inv_misc_leatherscrap_03.jpg',
      id: 2318,
      total: this.props.table.total.lightLeather,
      current: this.props.table.current.lightLeather
    }), Ally_jsx(Item_Item, {
      pic: 'inv_misc_leatherscrap_05.jpg',
      id: 2319,
      total: this.props.table.total.mediumLeather,
      current: this.props.table.current.mediumLeather
    }));
  }

}
// CONCATENATED MODULE: ./components/Horde.js
var Horde_jsx = external_react_default.a.createElement;


class Horde_Horde extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return Horde_jsx(external_react_["Fragment"], null, Horde_jsx(Item_Item, {
      pic: 'inv_bannerpvp_01.jpg',
      id: 21438,
      total: this.props.table.total.sumTotal,
      current: this.props.table.current.sumTotal
    }), Horde_jsx("hr", null), Horde_jsx(Item_Item, {
      pic: 'inv_ingot_02.jpg',
      id: 2840,
      total: this.props.table.total.copperBar,
      current: this.props.table.current.copperBar
    }), Horde_jsx(Item_Item, {
      pic: 'inv_misc_leatherscrap_08.jpg',
      id: 4304,
      total: this.props.table.total.thickLeather,
      current: this.props.table.current.thickLeather
    }), Horde_jsx(Item_Item, {
      pic: 'inv_misc_bandage_11.jpg',
      id: 14529,
      total: this.props.table.total.runeclothBandage,
      current: this.props.table.current.runeclothBandage
    }), Horde_jsx(Item_Item, {
      pic: 'inv_misc_herb_17.jpg',
      id: 8831,
      total: this.props.table.total.purpleLotus,
      current: this.props.table.current.purpleLotus
    }), Horde_jsx(Item_Item, {
      pic: 'inv_misc_fish_01.jpg',
      id: 6887,
      total: this.props.table.total.spottedYellowtail,
      current: this.props.table.current.spottedYellowtail
    }), Horde_jsx("hr", null), Horde_jsx(Item_Item, {
      pic: 'inv_misc_bandage_14.jpg',
      id: 3530,
      total: this.props.table.total.woolBandage,
      current: this.props.table.current.woolBandage
    }), Horde_jsx(Item_Item, {
      pic: 'inv_misc_bandage_19.jpg',
      id: 8544,
      total: this.props.table.total.mageBandage,
      current: this.props.table.current.mageBandage
    }), Horde_jsx(Item_Item, {
      pic: 'inv_misc_food_47.jpg',
      id: 12209,
      total: this.props.table.total.leanWolf,
      current: this.props.table.current.leanWolf
    }), Horde_jsx(Item_Item, {
      pic: 'inv_misc_fish_20.jpg',
      id: 13935,
      total: this.props.table.total.bakedSalmon,
      current: this.props.table.current.bakedSalmon
    }), Horde_jsx(Item_Item, {
      pic: 'inv_misc_flower_02.jpg',
      id: 2447,
      total: this.props.table.total.peacebloom,
      current: this.props.table.current.peacebloom
    }), Horde_jsx(Item_Item, {
      pic: 'inv_misc_herb_19.jpg',
      id: 4625,
      total: this.props.table.total.firebloom,
      current: this.props.table.current.firebloom
    }), Horde_jsx(Item_Item, {
      pic: 'inv_ingot_05.jpg',
      id: 3576,
      total: this.props.table.total.tinBar,
      current: this.props.table.current.tinBar
    }), Horde_jsx(Item_Item, {
      pic: 'inv_ingot_06.jpg',
      id: 3860,
      total: this.props.table.total.mithrilBar,
      current: this.props.table.current.mithrilBar
    }), Horde_jsx(Item_Item, {
      pic: 'inv_misc_leatherscrap_07.jpg',
      id: 4234,
      total: this.props.table.total.heavyLeather,
      current: this.props.table.current.heavyLeather
    }), Horde_jsx(Item_Item, {
      pic: 'inv_misc_leatherscrap_02.jpg',
      id: 8170,
      total: this.props.table.total.ruggedLeather,
      current: this.props.table.current.ruggedLeather
    }));
  }

}
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;








function Index({
  gson,
  lastUpdate,
  preview
}) {
  const table = {
    ally: {
      current: new Table(gson[1]),
      total: new Table(gson[0])
    },
    horde: {
      current: new Table(gson[3]),
      total: new Table(gson[2])
    }
  };
  return pages_jsx(Layout_Layout, null, pages_jsx(Hero_Hero, {
    date: lastUpdate
  }), pages_jsx("section", {
    id: "section-table"
  }, pages_jsx("div", {
    className: "header-bar"
  }, pages_jsx(Item_Item, {
    pic: 'inv_sword_38.jpg',
    id: 10847,
    total: table.ally.total.sumTotal + table.horde.total.sumTotal,
    current: table.ally.current.sumTotal + table.horde.current.sumTotal
  })), pages_jsx("div", {
    id: "table"
  }, pages_jsx("div", {
    id: "table-ally",
    className: "tab"
  }, pages_jsx(Ally_Ally, {
    table: table.ally
  })), pages_jsx("div", {
    id: "table-horde",
    className: "tab"
  }, pages_jsx(Horde_Horde, {
    table: table.horde
  })))), pages_jsx("footer", {
    id: "footer"
  }, pages_jsx("span", null, "Made with \uD83C\uDF7B\uFE0F by Exa & Doyd ", pages_jsx("br", null), "of the Laughing Coffin"), pages_jsx("span", null, pages_jsx("i", {
    className: "fab fa-github"
  }), ' ', pages_jsx("a", {
    href: "https://github.com/JollyGrin/aqwareffort"
  }, "View Source"))));
}
async function getStaticProps({
  preview = false
}) {
  const gson = await getData(process.env.URL); // const lastUpdate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

  const lastUpdate = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Paris"
  });
  return {
    props: {
      gson,
      lastUpdate
    } // will be passed to the page component as props

  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cwSO":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });