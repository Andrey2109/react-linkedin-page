import {
  SvgIcon_default,
  capitalize_default,
  init_SvgIcon,
  init_capitalize,
  init_memoTheme,
  memoTheme
} from "./chunk-RDTNOONC.js";
import {
  ClassNameGenerator_default,
  createChainedFunction,
  debounce,
  deprecatedPropType,
  init_createChainedFunction,
  init_debounce,
  init_deprecatedPropType,
  init_esm,
  init_isMuiElement,
  init_ownerDocument,
  init_ownerWindow,
  init_requirePropFactory,
  init_setRef,
  init_unsupportedProp,
  init_useControlled,
  init_useEnhancedEffect,
  init_useEventCallback,
  init_useForkRef,
  init_useId,
  isMuiElement,
  ownerDocument,
  ownerWindow,
  requirePropFactory,
  require_jsx_runtime,
  setRef,
  unsupportedProp,
  useControlled,
  useEnhancedEffect_default,
  useEventCallback_default,
  useForkRef,
  useId
} from "./chunk-5HK3WVBV.js";
import {
  __esm,
  __export,
  __toESM,
  require_react
} from "./chunk-LABQ442N.js";

// node_modules/@mui/material/utils/createChainedFunction.js
var createChainedFunction_default;
var init_createChainedFunction2 = __esm({
  "node_modules/@mui/material/utils/createChainedFunction.js"() {
    init_createChainedFunction();
    createChainedFunction_default = createChainedFunction;
  }
});

// node_modules/@mui/material/utils/createSvgIcon.js
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return (0, import_jsx_runtime.jsx)(SvgIcon_default, {
      "data-testid": `${displayName}Icon`,
      ref,
      ...props,
      children: path
    });
  }
  if (true) {
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon_default.muiName;
  return React.memo(React.forwardRef(Component));
}
var React, import_jsx_runtime;
var init_createSvgIcon = __esm({
  "node_modules/@mui/material/utils/createSvgIcon.js"() {
    "use client";
    React = __toESM(require_react());
    init_SvgIcon();
    import_jsx_runtime = __toESM(require_jsx_runtime());
  }
});

// node_modules/@mui/material/utils/debounce.js
var debounce_default;
var init_debounce2 = __esm({
  "node_modules/@mui/material/utils/debounce.js"() {
    init_debounce();
    debounce_default = debounce;
  }
});

// node_modules/@mui/material/utils/deprecatedPropType.js
var deprecatedPropType_default;
var init_deprecatedPropType2 = __esm({
  "node_modules/@mui/material/utils/deprecatedPropType.js"() {
    init_deprecatedPropType();
    deprecatedPropType_default = deprecatedPropType;
  }
});

// node_modules/@mui/material/utils/isMuiElement.js
var isMuiElement_default;
var init_isMuiElement2 = __esm({
  "node_modules/@mui/material/utils/isMuiElement.js"() {
    init_isMuiElement();
    isMuiElement_default = isMuiElement;
  }
});

// node_modules/@mui/material/utils/ownerDocument.js
var ownerDocument_default;
var init_ownerDocument2 = __esm({
  "node_modules/@mui/material/utils/ownerDocument.js"() {
    init_ownerDocument();
    ownerDocument_default = ownerDocument;
  }
});

// node_modules/@mui/material/utils/ownerWindow.js
var ownerWindow_default;
var init_ownerWindow2 = __esm({
  "node_modules/@mui/material/utils/ownerWindow.js"() {
    init_ownerWindow();
    ownerWindow_default = ownerWindow;
  }
});

// node_modules/@mui/material/utils/requirePropFactory.js
var requirePropFactory_default;
var init_requirePropFactory2 = __esm({
  "node_modules/@mui/material/utils/requirePropFactory.js"() {
    init_requirePropFactory();
    requirePropFactory_default = requirePropFactory;
  }
});

// node_modules/@mui/material/utils/setRef.js
var setRef_default;
var init_setRef2 = __esm({
  "node_modules/@mui/material/utils/setRef.js"() {
    init_setRef();
    setRef_default = setRef;
  }
});

// node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect_default2;
var init_useEnhancedEffect2 = __esm({
  "node_modules/@mui/material/utils/useEnhancedEffect.js"() {
    "use client";
    init_useEnhancedEffect();
    useEnhancedEffect_default2 = useEnhancedEffect_default;
  }
});

// node_modules/@mui/material/utils/useId.js
var useId_default;
var init_useId2 = __esm({
  "node_modules/@mui/material/utils/useId.js"() {
    "use client";
    init_useId();
    useId_default = useId;
  }
});

// node_modules/@mui/material/utils/unsupportedProp.js
var unsupportedProp_default;
var init_unsupportedProp2 = __esm({
  "node_modules/@mui/material/utils/unsupportedProp.js"() {
    init_unsupportedProp();
    unsupportedProp_default = unsupportedProp;
  }
});

// node_modules/@mui/material/utils/useControlled.js
var useControlled_default;
var init_useControlled2 = __esm({
  "node_modules/@mui/material/utils/useControlled.js"() {
    "use client";
    init_useControlled();
    useControlled_default = useControlled;
  }
});

// node_modules/@mui/material/utils/useEventCallback.js
var useEventCallback_default2;
var init_useEventCallback2 = __esm({
  "node_modules/@mui/material/utils/useEventCallback.js"() {
    "use client";
    init_useEventCallback();
    useEventCallback_default2 = useEventCallback_default;
  }
});

// node_modules/@mui/material/utils/useForkRef.js
var useForkRef_default;
var init_useForkRef2 = __esm({
  "node_modules/@mui/material/utils/useForkRef.js"() {
    "use client";
    init_useForkRef();
    useForkRef_default = useForkRef;
  }
});

// node_modules/@mui/material/utils/index.js
var utils_exports = {};
__export(utils_exports, {
  capitalize: () => capitalize_default,
  createChainedFunction: () => createChainedFunction_default,
  createSvgIcon: () => createSvgIcon,
  debounce: () => debounce_default,
  deprecatedPropType: () => deprecatedPropType_default,
  isMuiElement: () => isMuiElement_default,
  ownerDocument: () => ownerDocument_default,
  ownerWindow: () => ownerWindow_default,
  requirePropFactory: () => requirePropFactory_default,
  setRef: () => setRef_default,
  unstable_ClassNameGenerator: () => unstable_ClassNameGenerator,
  unstable_memoTheme: () => memoTheme,
  unstable_useEnhancedEffect: () => useEnhancedEffect_default2,
  unstable_useId: () => useId_default,
  unsupportedProp: () => unsupportedProp_default,
  useControlled: () => useControlled_default,
  useEventCallback: () => useEventCallback_default2,
  useForkRef: () => useForkRef_default
});
var unstable_ClassNameGenerator;
var init_utils = __esm({
  "node_modules/@mui/material/utils/index.js"() {
    "use client";
    init_esm();
    init_capitalize();
    init_createChainedFunction2();
    init_createSvgIcon();
    init_debounce2();
    init_deprecatedPropType2();
    init_isMuiElement2();
    init_memoTheme();
    init_ownerDocument2();
    init_ownerWindow2();
    init_requirePropFactory2();
    init_setRef2();
    init_useEnhancedEffect2();
    init_useId2();
    init_unsupportedProp2();
    init_useControlled2();
    init_useEventCallback2();
    init_useForkRef2();
    unstable_ClassNameGenerator = {
      configure: (generator) => {
        if (true) {
          console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join("\n"));
        }
        ClassNameGenerator_default.configure(generator);
      }
    };
  }
});

export {
  createChainedFunction_default,
  init_createChainedFunction2 as init_createChainedFunction,
  createSvgIcon,
  init_createSvgIcon,
  debounce_default,
  init_debounce2 as init_debounce,
  deprecatedPropType_default,
  isMuiElement_default,
  init_isMuiElement2 as init_isMuiElement,
  ownerDocument_default,
  init_ownerDocument2 as init_ownerDocument,
  ownerWindow_default,
  init_ownerWindow2 as init_ownerWindow,
  requirePropFactory_default,
  init_requirePropFactory2 as init_requirePropFactory,
  setRef_default,
  useEnhancedEffect_default2 as useEnhancedEffect_default,
  init_useEnhancedEffect2 as init_useEnhancedEffect,
  useId_default,
  init_useId2 as init_useId,
  unsupportedProp_default,
  init_unsupportedProp2 as init_unsupportedProp,
  useControlled_default,
  init_useControlled2 as init_useControlled,
  useEventCallback_default2 as useEventCallback_default,
  init_useEventCallback2 as init_useEventCallback,
  useForkRef_default,
  init_useForkRef2 as init_useForkRef,
  unstable_ClassNameGenerator,
  utils_exports,
  init_utils
};
//# sourceMappingURL=chunk-LQV4HFNH.js.map
