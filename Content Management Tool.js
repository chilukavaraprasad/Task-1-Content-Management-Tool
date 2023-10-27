function submitForm() {
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var image = document.getElementById('image').files[0];
    var video = document.getElementById('video').files[0];
  
    var dataSection = document.getElementById('dataSection');
  
    var cardElement = document.createElement('div');
    cardElement.classList.add('card');
  
    var cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    var cardTitle = document.createElement('h3');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = `<b>Title:</b> ${title}`;
    cardHeader.appendChild(cardTitle);
  
    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    var contentParagraph = document.createElement('p');
    contentParagraph.innerHTML = `<b>Content:</b> ${content}`;
    cardBody.appendChild(contentParagraph);
  
    if (image) {
      var imagePreview = document.createElement('img');
      imagePreview.src = URL.createObjectURL(image);
      imagePreview.classList.add('preview');
      imagePreview.alt = 'Selected Image';
      cardBody.appendChild(document.createElement('p')).innerHTML = '<b>Image:</b>';
      var imageContainer = document.createElement('div');
      imageContainer.classList.add('card-body-image');
      imageContainer.appendChild(imagePreview);
      cardBody.appendChild(imageContainer);
    }
  
    if (video) {
      var videoPreview = document.createElement('video');
      videoPreview.src = URL.createObjectURL(video);
      videoPreview.controls = true;
      videoPreview.autoplay = true;
      videoPreview.classList.add('video-preview');
      cardBody.appendChild(document.createElement('p')).innerHTML = '<b>Video:</b>';
      var videoContainer = document.createElement('div');
      videoContainer.classList.add('card-body-video');
      videoContainer.appendChild(videoPreview);
      cardBody.appendChild(videoContainer);
    }
  
    cardElement.appendChild(cardHeader);
    cardElement.appendChild(cardBody);
    dataSection.appendChild(cardElement);
  
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('image').value = '';
    document.getElementById('video').value = '';
  }
  
