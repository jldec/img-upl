(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
 * pub-ux.js
 * browserify entry point for legacy pub-pkg-editor
 *
 * copyright 2015-2019, Jurgen Leschner - github.com/jldec - MIT license
*/

/* global $ */

$(function(){

  var style =
  { 'position':'fixed',
    'z-index':'9999999',
    'opacity':'0.5',
    'font-family': '"Helvetica Neue",Tahoma,Arial,sans-serif',
    'font-weight': '400',
    'font-size': '18px',
    'line-height': '20px',
    'height':'21px',
    'top':'0',
    'right':'0',
    'background-color':'#555',
    'color':'#fff',
    'border-bottom-left-radius':'10px',
    'text-align':'right',
    'padding':'0 2px 0 5px',
    'cursor':'pointer' };

  var $b;

  if (window.parent.location.pathname.match(/\/pub\/$/)) {
    $.pubEditor = true;
    $b = $('<div class="pub-button" title="Close editor">Close</div>').css(style);
    $('body').prepend($b);
    $b.on('click', function(){
      var contentHref = location.pathname + location.search + location.hash;
      var staticRoot = window.generator && window.generator.opts.staticRoot;
      if (staticRoot && contentHref.slice(0, staticRoot.length) !== staticRoot) {
        contentHref = staticRoot + contentHref;
      }
      window.parent.location = contentHref;
    });
  }
  else {
    $.pubEditor = false;
    // logic supports static at root or not, or pub-server /pub/ editor
    // page param used in pub-preview.js to open editor on the proper page
    $b = $('<div class="pub-button" title="Edit">Edit</div>').css(style);
    $('body').prepend($b);
    $b.on('click', function(){
      var pubRef = window.pubRef || {};
      var contentHref = (pubRef.href || location.pathname) + location.search + location.hash;
      var editorHref = (pubRef.relPath || '') + '/pub/?page=' + encodeURIComponent(contentHref);
      location = editorHref;
    });
  }

});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvcHViLXNlcnZlci9jbGllbnQvcHViLXV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLypcbiAqIHB1Yi11eC5qc1xuICogYnJvd3NlcmlmeSBlbnRyeSBwb2ludCBmb3IgbGVnYWN5IHB1Yi1wa2ctZWRpdG9yXG4gKlxuICogY29weXJpZ2h0IDIwMTUtMjAxOSwgSnVyZ2VuIExlc2NobmVyIC0gZ2l0aHViLmNvbS9qbGRlYyAtIE1JVCBsaWNlbnNlXG4qL1xuXG4vKiBnbG9iYWwgJCAqL1xuXG4kKGZ1bmN0aW9uKCl7XG5cbiAgdmFyIHN0eWxlID1cbiAgeyAncG9zaXRpb24nOidmaXhlZCcsXG4gICAgJ3otaW5kZXgnOic5OTk5OTk5JyxcbiAgICAnb3BhY2l0eSc6JzAuNScsXG4gICAgJ2ZvbnQtZmFtaWx5JzogJ1wiSGVsdmV0aWNhIE5ldWVcIixUYWhvbWEsQXJpYWwsc2Fucy1zZXJpZicsXG4gICAgJ2ZvbnQtd2VpZ2h0JzogJzQwMCcsXG4gICAgJ2ZvbnQtc2l6ZSc6ICcxOHB4JyxcbiAgICAnbGluZS1oZWlnaHQnOiAnMjBweCcsXG4gICAgJ2hlaWdodCc6JzIxcHgnLFxuICAgICd0b3AnOicwJyxcbiAgICAncmlnaHQnOicwJyxcbiAgICAnYmFja2dyb3VuZC1jb2xvcic6JyM1NTUnLFxuICAgICdjb2xvcic6JyNmZmYnLFxuICAgICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJzonMTBweCcsXG4gICAgJ3RleHQtYWxpZ24nOidyaWdodCcsXG4gICAgJ3BhZGRpbmcnOicwIDJweCAwIDVweCcsXG4gICAgJ2N1cnNvcic6J3BvaW50ZXInIH07XG5cbiAgdmFyICRiO1xuXG4gIGlmICh3aW5kb3cucGFyZW50LmxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKC9cXC9wdWJcXC8kLykpIHtcbiAgICAkLnB1YkVkaXRvciA9IHRydWU7XG4gICAgJGIgPSAkKCc8ZGl2IGNsYXNzPVwicHViLWJ1dHRvblwiIHRpdGxlPVwiQ2xvc2UgZWRpdG9yXCI+Q2xvc2U8L2Rpdj4nKS5jc3Moc3R5bGUpO1xuICAgICQoJ2JvZHknKS5wcmVwZW5kKCRiKTtcbiAgICAkYi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgdmFyIGNvbnRlbnRIcmVmID0gbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2ggKyBsb2NhdGlvbi5oYXNoO1xuICAgICAgdmFyIHN0YXRpY1Jvb3QgPSB3aW5kb3cuZ2VuZXJhdG9yICYmIHdpbmRvdy5nZW5lcmF0b3Iub3B0cy5zdGF0aWNSb290O1xuICAgICAgaWYgKHN0YXRpY1Jvb3QgJiYgY29udGVudEhyZWYuc2xpY2UoMCwgc3RhdGljUm9vdC5sZW5ndGgpICE9PSBzdGF0aWNSb290KSB7XG4gICAgICAgIGNvbnRlbnRIcmVmID0gc3RhdGljUm9vdCArIGNvbnRlbnRIcmVmO1xuICAgICAgfVxuICAgICAgd2luZG93LnBhcmVudC5sb2NhdGlvbiA9IGNvbnRlbnRIcmVmO1xuICAgIH0pO1xuICB9XG4gIGVsc2Uge1xuICAgICQucHViRWRpdG9yID0gZmFsc2U7XG4gICAgLy8gbG9naWMgc3VwcG9ydHMgc3RhdGljIGF0IHJvb3Qgb3Igbm90LCBvciBwdWItc2VydmVyIC9wdWIvIGVkaXRvclxuICAgIC8vIHBhZ2UgcGFyYW0gdXNlZCBpbiBwdWItcHJldmlldy5qcyB0byBvcGVuIGVkaXRvciBvbiB0aGUgcHJvcGVyIHBhZ2VcbiAgICAkYiA9ICQoJzxkaXYgY2xhc3M9XCJwdWItYnV0dG9uXCIgdGl0bGU9XCJFZGl0XCI+RWRpdDwvZGl2PicpLmNzcyhzdHlsZSk7XG4gICAgJCgnYm9keScpLnByZXBlbmQoJGIpO1xuICAgICRiLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgcHViUmVmID0gd2luZG93LnB1YlJlZiB8fCB7fTtcbiAgICAgIHZhciBjb250ZW50SHJlZiA9IChwdWJSZWYuaHJlZiB8fCBsb2NhdGlvbi5wYXRobmFtZSkgKyBsb2NhdGlvbi5zZWFyY2ggKyBsb2NhdGlvbi5oYXNoO1xuICAgICAgdmFyIGVkaXRvckhyZWYgPSAocHViUmVmLnJlbFBhdGggfHwgJycpICsgJy9wdWIvP3BhZ2U9JyArIGVuY29kZVVSSUNvbXBvbmVudChjb250ZW50SHJlZik7XG4gICAgICBsb2NhdGlvbiA9IGVkaXRvckhyZWY7XG4gICAgfSk7XG4gIH1cblxufSk7XG4iXX0=
