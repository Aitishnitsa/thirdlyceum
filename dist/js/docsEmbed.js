const container = document.getElementById('container');
const listModeBtn = document.getElementById('list-mode');
const gridModeBtn = document.getElementById('grid-mode');
const loader = document.getElementById('loader');

let asList = true;

let list = [];

function createItem(data) {
    return `<a href="${data.link}">
        <li
            class="docs-items sm:flex-row p-1 h-full col-span-1 flex border-solid border-2 border-orange hover:border-darkBlue transition-colors ease-in-out delay-75 rounded-2xl">
            <div class="flex justify-center items-center w-6 sm:w-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 -256 1792 1792"
                    version="1.1">
                    <g transform="matrix(1,0,0,-1,242.98305,1285.4237)">
                        <path
                            d="m 1024,352 v -64 q 0,-14 -9,-23 -9,-9 -23,-9 H 288 q -14,0 -23,9 -9,9 -9,23 v 64 q 0,14 9,23 9,9 23,9 h 704 q 14,0 23,-9 9,-9 9,-23 z m 0,256 v -64 q 0,-14 -9,-23 -9,-9 -23,-9 H 288 q -14,0 -23,9 -9,9 -9,23 v 64 q 0,14 9,23 9,9 23,9 h 704 q 14,0 23,-9 9,-9 9,-23 z M 128,0 H 1152 V 768 H 736 q -40,0 -68,28 -28,28 -28,68 v 416 H 128 V 0 z m 640,896 h 299 L 768,1195 V 896 z M 1280,768 V -32 q 0,-40 -28,-68 -28,-28 -68,-28 H 96 q -40,0 -68,28 -28,28 -28,68 v 1344 q 0,40 28,68 28,28 68,28 h 544 q 40,0 88,-20 48,-20 76,-48 l 408,-408 q 28,-28 48,-76 20,-48 20,-88 z"
                            style="fill:currentColor" />
                    </g>
                </svg>
            </div>
            <div class="sm:py-2 sm:px-4 items-center flex flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                <p class="text-xs sm:text-base font-medium text-wrap">${data.name}</p>
            </div>
        </li>
    </a>`;
}

listModeBtn.addEventListener('click', () => {
    if (!asList) {
        asList = true;

        listModeBtn.classList.remove('border-white');
        listModeBtn.classList.add('border-blue');

        gridModeBtn.classList.remove('border-blue');
        if (!gridModeBtn.classList.contains('border-white')) {
            gridModeBtn.classList.add('border-white');
        }

        if (container.classList.contains('grid-cols-2')) {
            container.classList.remove(...['sm:grid-cols-3', 'grid-cols-2']);
            container.classList.add('grid-cols-1');
        }

        list.forEach(item => {
            list.pop(item);
            list.push(item);
        });

        const docsItems = document.querySelectorAll('.docs-items');
        docsItems.forEach(item => {
            item.classList.remove(...['flex-col', 'items-center']);
        });
    }
});

gridModeBtn.addEventListener('click', () => {
    if (asList) {
        asList = false;

        gridModeBtn.classList.remove('border-white');
        gridModeBtn.classList.add('border-blue');

        listModeBtn.classList.remove('border-blue');
        if (!listModeBtn.classList.contains('border-white')) {
            listModeBtn.classList.add('border-white');
        }

        if (!container.classList.contains('grid-cols-2')) {
            container.classList.remove('grid-cols-1');
            container.classList.add(...['sm:grid-cols-3', 'grid-cols-2']);
        }

        list.forEach(item => {
            list.pop(item);
            list.push(item);
        });

        const docsItems = document.querySelectorAll('.docs-items');
        docsItems.forEach(item => {
            item.classList.add(...['flex-col', 'items-center']);
        });
    }
});

fetch('./docs.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(json => {
        json.forEach(data => {
            const item = createItem(data);
            container.innerHTML += item;
            list.push(item);
        });
        loader.classList.add('hidden');
    });
