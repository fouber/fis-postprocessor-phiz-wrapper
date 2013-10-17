/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

module.exports = function(content, file, conf){
    var className;
    var superClass = conf.superClass || 'PhizView';
    if(file.isMod){
        className = 'phiz_view_' + file.getId().replace(/\W/g, '_');
        content = [
            '<?php',
            'class ' + className + ' extends ' + superClass + ' {',
            '    protected function loadTemplate() {',
            '        ob_start();',
            '        ?>' + content + '<?php',
            '        return ob_get_clean();',
            '    }',
            '}'
        ].join('\n');
        file.extras.clazz = className;
    } else if(file.isClass){
        var reg = /"(?:[^\\"\r\n\f]|\\[\s\S])*"|'(?:[^\\'\n\r\f]|\\[\s\S])*'|(?:\/\/|#)[^\r\n\f]+|\/\*[\s\S]*?(?:\*\/|$)|\sclass\s+([a-zA-Z_][a-zA-Z_0-9]*)[\s{]/g;
        content.replace(reg, function(m, $1){
            if(!className && $1){
                className = $1;
            }
        });
        if(className){
            file.extras.clazz = className;
        } else {
            fis.log.error('undefined class name of file [' + file.subpath + ']');
        }
    }
    return content;
};