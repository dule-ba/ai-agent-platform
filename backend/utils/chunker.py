def chunk_text(text, max_length=3000):
    words = text.split()
    chunk, result, size = [], [], 0
    for word in words:
        if size + len(word) > max_length:
            result.append(' '.join(chunk))
            chunk, size = [], 0
        chunk.append(word)
        size += len(word) + 1
    if chunk:
        result.append(' '.join(chunk))
    return result