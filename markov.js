// https://github.com/mattwildig/markov-js/blob/master/markov.js

var MARKOV_SENTINEL_WORD = "SENTINEL";

function Markov(source) {    
    words = source.trim().split(/\s+/);
    
    var prefix_tab = {};
    
    var current_prefix = [MARKOV_SENTINEL_WORD, MARKOV_SENTINEL_WORD];
        
    for (var i = 0; i<words.length; i++) {
                
        prefix_tab[current_prefix] = prefix_tab[current_prefix] || [];
        prefix_tab[current_prefix].push(words[i]);
        
        current_prefix.shift();
        current_prefix.push(words[i]);
    }
    
    prefix_tab[current_prefix] = prefix_tab[current_prefix] || [];        
    prefix_tab[current_prefix].push(MARKOV_SENTINEL_WORD);
    
    this.generate = function(maxwords) {
        var generated = "";
        var keys = Object.keys(prefix_tab);
        var current_prefix = 
            keys[Math.floor(Math.random() * keys.length)].split(',');
        
        while(maxwords-- > 0) {
            var list = prefix_tab[current_prefix];  
            var nextWord = list[Math.floor(Math.random() * list.length)];
            
            if(nextWord == MARKOV_SENTINEL_WORD) break;
            generated += nextWord + " ";
            
            current_prefix.shift();
            current_prefix.push(nextWord);
        }
        
        return generated;
    }
}

