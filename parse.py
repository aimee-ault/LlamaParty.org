with open('mmmsexy.txt') as f:
    text = f.read()
with open('mmmsexy.js', 'w') as f:
    out_text = 'var llama_sex_str = "{}"'.format(' '.join(text.splitlines()).replace('"', '\\"'))
    f.write(out_text)
