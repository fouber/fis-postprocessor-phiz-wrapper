# fis-postprocessor-phiz-wrapper

a postprocessor plugin for fis to wrapper phiz view file.

## usage

    $ npm install -g fis-postprocessor-phiz-wrapper
    $ vi path/to/project/fis-conf.js

```javascript
//file : path/to/project/fis-conf.js

fis.config.set('roadmap.path', [
    {
        reg : '**.class.php',
        isMod : true
    },
    {
        reg : '**.php',
        isMod : true
    }
]);
fis.config.set('modules.postprocessor.php', 'phiz-wrapper');
//fis.config.set('settings.postprocessor.phiz-wrapper.superClass', 'PhizView');
```