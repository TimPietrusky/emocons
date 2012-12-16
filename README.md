# emocons.js

Transform anything into anything e.g. chat emoticons into icon font emo's from Fontelico. 

## Preview

![emocons](https://raw.github.com/TimPietrusky/emocons/master/img/emocons_preview.png)

## How does it work?

**emocons.js** searches the content of an element for specific character sequences. All matches are replaced with a ```span``` + the class of the icon.  

## How to use?

### JavaScript

```javascript
$('.chat').emocons();
```

### Available emoticons

```HTML
<div class="chat">
    :D 
    :) 
    ;) 
    :'( 
    :o 
    :/ 
    :(
    B)
    :P
    :|
    :beer:
    :devil: 
    :shoot:
    :coffee:  
    :thumbsup: 
    :angry:
    :ueber-happy:
</div>
```

---

Handcrafted 2012 by [@TimPietrusky](http://twitter.com/TimPietrusky) in Germany.