import {
  DefaultPropsProvider_default,
  GlobalStyles_default,
  capitalize,
  clsx_default,
  composeClasses,
  defaultTheme_default,
  extendSxProp,
  generateUtilityClass,
  generateUtilityClasses,
  identifier_default,
  init_DefaultPropsProvider,
  init_capitalize,
  init_clsx,
  init_composeClasses,
  init_defaultTheme,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_identifier,
  init_styleFunctionSx,
  init_styled,
  init_system,
  init_useTheme,
  require_jsx_runtime,
  require_prop_types,
  styled_default,
  useDefaultProps
} from "./chunk-5HK3WVBV.js";
import {
  __esm,
  __toESM,
  require_react
} from "./chunk-LABQ442N.js";

// node_modules/@mui/material/utils/capitalize.js
var capitalize_default;
var init_capitalize2 = __esm({
  "node_modules/@mui/material/utils/capitalize.js"() {
    init_capitalize();
    capitalize_default = capitalize;
  }
});

// node_modules/@mui/material/GlobalStyles/GlobalStyles.js
function GlobalStyles(props) {
  return (0, import_jsx_runtime.jsx)(GlobalStyles_default, {
    ...props,
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  });
}
var React, import_prop_types, import_jsx_runtime, GlobalStyles_default2;
var init_GlobalStyles = __esm({
  "node_modules/@mui/material/GlobalStyles/GlobalStyles.js"() {
    "use client";
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_system();
    init_defaultTheme();
    init_identifier();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    true ? GlobalStyles.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * The styles you want to apply globally.
       */
      styles: import_prop_types.default.oneOfType([import_prop_types.default.array, import_prop_types.default.func, import_prop_types.default.number, import_prop_types.default.object, import_prop_types.default.string, import_prop_types.default.bool])
    } : void 0;
    GlobalStyles_default2 = GlobalStyles;
  }
});

// node_modules/@mui/material/GlobalStyles/index.js
var init_GlobalStyles2 = __esm({
  "node_modules/@mui/material/GlobalStyles/index.js"() {
    init_GlobalStyles();
  }
});

// node_modules/@mui/material/zero-styled/index.js
function globalCss(styles) {
  return function GlobalStylesWrapper(props) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      (0, import_jsx_runtime2.jsx)(GlobalStyles_default2, {
        styles: typeof styles === "function" ? (theme) => styles({
          theme,
          ...props
        }) : styles
      })
    );
  };
}
function internal_createExtendSxProp() {
  return extendSxProp;
}
var React2, import_jsx_runtime2;
var init_zero_styled = __esm({
  "node_modules/@mui/material/zero-styled/index.js"() {
    React2 = __toESM(require_react());
    init_styleFunctionSx();
    init_useTheme();
    init_GlobalStyles2();
    import_jsx_runtime2 = __toESM(require_jsx_runtime());
    init_system();
    init_styled();
  }
});

// node_modules/@mui/material/utils/memoTheme.js
function memoTheme(styleFn) {
  let lastValue;
  let lastTheme;
  return (props) => {
    let value = lastValue;
    if (value === void 0 || props.theme !== lastTheme) {
      arg.theme = props.theme;
      value = styleFn(arg);
      lastValue = value;
      lastTheme = props.theme;
    }
    return value;
  };
}
var arg;
var init_memoTheme = __esm({
  "node_modules/@mui/material/utils/memoTheme.js"() {
    arg = {
      theme: void 0
    };
  }
});

// node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
function DefaultPropsProvider(props) {
  return (0, import_jsx_runtime3.jsx)(DefaultPropsProvider_default, {
    ...props
  });
}
function useDefaultProps2(params) {
  return useDefaultProps(params);
}
var React3, import_prop_types2, import_jsx_runtime3;
var init_DefaultPropsProvider2 = __esm({
  "node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"() {
    "use client";
    React3 = __toESM(require_react());
    import_prop_types2 = __toESM(require_prop_types());
    init_DefaultPropsProvider();
    import_jsx_runtime3 = __toESM(require_jsx_runtime());
    true ? DefaultPropsProvider.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * @ignore
       */
      children: import_prop_types2.default.node,
      /**
       * @ignore
       */
      value: import_prop_types2.default.object.isRequired
    } : void 0;
  }
});

// node_modules/@mui/material/DefaultPropsProvider/index.js
var init_DefaultPropsProvider3 = __esm({
  "node_modules/@mui/material/DefaultPropsProvider/index.js"() {
    init_DefaultPropsProvider2();
  }
});

// node_modules/@mui/material/SvgIcon/svgIconClasses.js
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses, svgIconClasses_default;
var init_svgIconClasses = __esm({
  "node_modules/@mui/material/SvgIcon/svgIconClasses.js"() {
    init_generateUtilityClasses();
    init_generateUtilityClass();
    svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
    svgIconClasses_default = svgIconClasses;
  }
});

// node_modules/@mui/material/SvgIcon/SvgIcon.js
var React4, import_prop_types3, import_jsx_runtime4, useUtilityClasses, SvgIconRoot, SvgIcon, SvgIcon_default;
var init_SvgIcon = __esm({
  "node_modules/@mui/material/SvgIcon/SvgIcon.js"() {
    "use client";
    React4 = __toESM(require_react());
    import_prop_types3 = __toESM(require_prop_types());
    init_clsx();
    init_composeClasses();
    init_capitalize2();
    init_zero_styled();
    init_memoTheme();
    init_DefaultPropsProvider3();
    init_svgIconClasses();
    import_jsx_runtime4 = __toESM(require_jsx_runtime());
    useUtilityClasses = (ownerState) => {
      const {
        color,
        fontSize,
        classes
      } = ownerState;
      const slots = {
        root: ["root", color !== "inherit" && `color${capitalize_default(color)}`, `fontSize${capitalize_default(fontSize)}`]
      };
      return composeClasses(slots, getSvgIconUtilityClass, classes);
    };
    SvgIconRoot = styled_default("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (props, styles) => {
        const {
          ownerState
        } = props;
        return [styles.root, ownerState.color !== "inherit" && styles[`color${capitalize_default(ownerState.color)}`], styles[`fontSize${capitalize_default(ownerState.fontSize)}`]];
      }
    })(memoTheme(({
      theme
    }) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition: (_d = (_a = theme.transitions) == null ? void 0 : _a.create) == null ? void 0 : _d.call(_a, "fill", {
          duration: (_c = (_b = (theme.vars ?? theme).transitions) == null ? void 0 : _b.duration) == null ? void 0 : _c.shorter
        }),
        variants: [
          {
            props: (props) => !props.hasSvgAsChild,
            style: {
              // the <svg> will define the property that has `currentColor`
              // for example heroicons uses fill="none" and stroke="currentColor"
              fill: "currentColor"
            }
          },
          {
            props: {
              fontSize: "inherit"
            },
            style: {
              fontSize: "inherit"
            }
          },
          {
            props: {
              fontSize: "small"
            },
            style: {
              fontSize: ((_f = (_e = theme.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f.call(_e, 20)) || "1.25rem"
            }
          },
          {
            props: {
              fontSize: "medium"
            },
            style: {
              fontSize: ((_h = (_g = theme.typography) == null ? void 0 : _g.pxToRem) == null ? void 0 : _h.call(_g, 24)) || "1.5rem"
            }
          },
          {
            props: {
              fontSize: "large"
            },
            style: {
              fontSize: ((_j = (_i = theme.typography) == null ? void 0 : _i.pxToRem) == null ? void 0 : _j.call(_i, 35)) || "2.1875rem"
            }
          },
          // TODO v5 deprecate color prop, v6 remove for sx
          ...Object.entries((theme.vars ?? theme).palette).filter(([, value]) => value && value.main).map(([color]) => {
            var _a2, _b2;
            return {
              props: {
                color
              },
              style: {
                color: (_b2 = (_a2 = (theme.vars ?? theme).palette) == null ? void 0 : _a2[color]) == null ? void 0 : _b2.main
              }
            };
          }),
          {
            props: {
              color: "action"
            },
            style: {
              color: (_l = (_k = (theme.vars ?? theme).palette) == null ? void 0 : _k.action) == null ? void 0 : _l.active
            }
          },
          {
            props: {
              color: "disabled"
            },
            style: {
              color: (_n = (_m = (theme.vars ?? theme).palette) == null ? void 0 : _m.action) == null ? void 0 : _n.disabled
            }
          },
          {
            props: {
              color: "inherit"
            },
            style: {
              color: void 0
            }
          }
        ]
      };
    }));
    SvgIcon = React4.forwardRef(function SvgIcon2(inProps, ref) {
      const props = useDefaultProps2({
        props: inProps,
        name: "MuiSvgIcon"
      });
      const {
        children,
        className,
        color = "inherit",
        component = "svg",
        fontSize = "medium",
        htmlColor,
        inheritViewBox = false,
        titleAccess,
        viewBox = "0 0 24 24",
        ...other
      } = props;
      const hasSvgAsChild = React4.isValidElement(children) && children.type === "svg";
      const ownerState = {
        ...props,
        color,
        component,
        fontSize,
        instanceFontSize: inProps.fontSize,
        inheritViewBox,
        viewBox,
        hasSvgAsChild
      };
      const more = {};
      if (!inheritViewBox) {
        more.viewBox = viewBox;
      }
      const classes = useUtilityClasses(ownerState);
      return (0, import_jsx_runtime4.jsxs)(SvgIconRoot, {
        as: component,
        className: clsx_default(classes.root, className),
        focusable: "false",
        color: htmlColor,
        "aria-hidden": titleAccess ? void 0 : true,
        role: titleAccess ? "img" : void 0,
        ref,
        ...more,
        ...other,
        ...hasSvgAsChild && children.props,
        ownerState,
        children: [hasSvgAsChild ? children.props.children : children, titleAccess ? (0, import_jsx_runtime4.jsx)("title", {
          children: titleAccess
        }) : null]
      });
    });
    true ? SvgIcon.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * Node passed into the SVG element.
       */
      children: import_prop_types3.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types3.default.object,
      /**
       * @ignore
       */
      className: import_prop_types3.default.string,
      /**
       * The color of the component.
       * It supports both default and custom theme colors, which can be added as shown in the
       * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
       * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
       * @default 'inherit'
       */
      color: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types3.default.string]),
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types3.default.elementType,
      /**
       * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
       * @default 'medium'
       */
      fontSize: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types3.default.string]),
      /**
       * Applies a color attribute to the SVG element.
       */
      htmlColor: import_prop_types3.default.string,
      /**
       * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
       * prop will be ignored.
       * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
       * `component`'s viewBox to the root node.
       * @default false
       */
      inheritViewBox: import_prop_types3.default.bool,
      /**
       * The shape-rendering attribute. The behavior of the different options is described on the
       * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
       * If you are having issues with blurry icons you should investigate this prop.
       */
      shapeRendering: import_prop_types3.default.string,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
      /**
       * Provides a human-readable title for the element that contains it.
       * https://www.w3.org/TR/SVG-access/#Equivalent
       */
      titleAccess: import_prop_types3.default.string,
      /**
       * Allows you to redefine what the coordinates without units mean inside an SVG element.
       * For example, if the SVG element is 500 (width) by 200 (height),
       * and you pass viewBox="0 0 50 20",
       * this means that the coordinates inside the SVG will go from the top left corner (0,0)
       * to bottom right (50,20) and each unit will be worth 10px.
       * @default '0 0 24 24'
       */
      viewBox: import_prop_types3.default.string
    } : void 0;
    if (SvgIcon) {
      SvgIcon.muiName = "SvgIcon";
    }
    SvgIcon_default = SvgIcon;
  }
});

// node_modules/@mui/material/SvgIcon/index.js
var init_SvgIcon2 = __esm({
  "node_modules/@mui/material/SvgIcon/index.js"() {
    init_SvgIcon();
    init_svgIconClasses();
    init_svgIconClasses();
  }
});

export {
  capitalize_default,
  init_capitalize2 as init_capitalize,
  GlobalStyles_default2 as GlobalStyles_default,
  init_GlobalStyles2 as init_GlobalStyles,
  globalCss,
  internal_createExtendSxProp,
  init_zero_styled,
  memoTheme,
  init_memoTheme,
  useDefaultProps2 as useDefaultProps,
  init_DefaultPropsProvider3 as init_DefaultPropsProvider,
  getSvgIconUtilityClass,
  svgIconClasses_default,
  SvgIcon_default,
  init_SvgIcon2 as init_SvgIcon
};
//# sourceMappingURL=chunk-RDTNOONC.js.map
