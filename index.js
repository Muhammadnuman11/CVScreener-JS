// console.log('This is CV screener Js');

const data = [
    {
        name: 'Azam Ali',
        age: 18,
        city: 'Lahore',
        language: 'Php',
        framework: 'Laravel',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },

    {
        name: 'Arslan',
        age: 21,
        city: 'Faislabad',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },

    {
        name: 'Mera Khan',
        age: 48,
        city: 'Lahore',
        language: 'Js',
        framework: 'Node',
        image: 'https://randomuser.me/api/portraits/women/66.jpg'
    },

    {
        name: 'Sohni meer',
        age: 38,
        city: 'Karachi',
        language: 'C++',
        framework: 'Laravel',
        image: 'https://randomuser.me/api/portraits/women/72.jpg'
    },

    {
        name: 'Ali Zafer',
        age: 28,
        city: 'Islamabad',
        language: 'C#',
        framework: 'Laravel',
        image: 'https://randomuser.me/api/portraits/men/36.jpg'
    },

    {
        name: 'AK Khan',
        age: 18,
        city: 'Lahore',
        language: 'Php',
        framework: 'Laravel',
        image: 'https://randomuser.me/api/portraits/men/15.jpg'
    },

    {
        name: 'Asad Khan',
        age: 21,
        city: 'Faislabad',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/67.jpg'
    },

    {
        name: 'Sara Khan',
        age: 48,
        city: 'Lahore',
        language: 'Js',
        framework: 'Node',
        image: 'https://randomuser.me/api/portraits/women/81.jpg'
    },

    {
        name: 'Rabi',
        age: 38,
        city: 'Karachi',
        language: 'C++',
        framework: 'Laravel',
        image: 'https://randomuser.me/api/portraits/women/12.jpg'
    },

    {
        name: 'Zahad Ali',
        age: 28,
        city: 'Islamabad',
        language: 'C#',
        framework: 'Laravel',
        image: 'https://randomuser.me/api/portraits/men/96.jpg'
    }
]


// CV Iterator

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++], done: false
            } :
                { done: true }
        }
    };
}

const candidates = cvIterator(data);

nextCV();
// Button Listener 
const next = document.getElementById('next');
next.addEventListener('click', nextCV);
function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;

        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item my-1">Name: <u>${currentCandidate.name}</u></li>
    <li class="list-group-item my-1"><u>${currentCandidate.age}</u> years old</li>
    <li class="list-group-item my-1">Lives in <u>${currentCandidate.city}</u></li>
    <li class="list-group-item my-1">Primarily works on <u>${currentCandidate.language}</u></li>
    <li class="list-group-item">Uses <u>${currentCandidate.framework}</u> framework</li>
  </ul>`
    }
    else {
        alert('End of candidate applications');
        window.location.reload();
    }
}