class Comment {
    past_id = '';
    user_id = '';
    content = '';
    usercomment = '';
    api_url = 'https://63571f572712d01e1402966c.mockapi.io';

    create() {
        let data = {
            post_id: this.post_id,
            user_id: this.user_id,
            content: this.content,
            usercomment: this.usercomment
        };

        data = JSON.stringify(data);

        fetch(this.api_url + '/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data
        })
            .then(response => response.json())
            .then(data => { alert('Postavljen je komentar'); })
            
    }

    async get(post_id) {
        let api_url = this.api_url + '/comments';

        const response = await fetch(api_url);
        const data = await response.json();
        let post_comments = [];

        let i = 0;
        data.forEach(item => {
            if (item.post_id === post_id) {
                post_comments[i] = item;
                i++;
            }
        });
        return post_comments;
    }
}