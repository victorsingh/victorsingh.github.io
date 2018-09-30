const navigatorObject = [
  {
    name: 'Browser CodeName',
    codeName: navigator.appCodeName
  },
  {
    name: 'Browser Name',
    codeName: navigator.appName
  },
  {
    name: 'Browser Version',
    codeName: navigator.appVersion
  },
  {
    name: 'Cookies Enabled?',
    codeName: navigator.cookieEnabled
  },
  {
    name: 'Language',
    codeName: navigator.language
  },
  {
    name: 'Browser Online',
    codeName: navigator.onLine
  },
  {
    name: 'Platform',
    codeName: navigator.platform
  },
  {
    name: 'User Agent Header',
    codeName: navigator.userAgent
  }
]

const screens = [
  {
    name: 'Total width/height:',
    codeName: screen.width +
      " " +
      "*" +
      " " +
      screen.height
  },
  {
    name: 'Available width/height:',
    codeName: screen.availWidth +
      " " +
      "*" +
      " " +
      screen.availHeight
  },
  {
    name: 'Color depth:',
    codeName: screen.colorDepth
  },
  {
    name: 'Color resolution:',
    codeName: screen.pixelDepth

  }
]

const windowInfo = [
  {
    name: 'Inner Width',
    codeName: window.innerWidth
  },
  {
    name: 'Inner Height',
    codeName: window.innerHeight
  },
  {
    name: 'Outer Width',
    codeName: window.outerWidth
  },
  {
    name: 'Outer Height',
    codeName: window.outerHeight
  }
]

const processHtml = (ourObject) => {
  const newConainer = document.createElement('div')
  newConainer.className = 'pass-in-container'
  const newList = document.createElement('ul')
  newList.className = 'processed-pass-in'
  newConainer.appendChild(newList)
  const listOfLi = ourObject.map(obj => {
    const newChild = document.createElement('li')
    newChild.innerHTML = obj.name + " " + obj.codeName
    newList.appendChild(newChild)
  })
  return newConainer
}

const ContactInfo = [
  {
    name: 'Victor Singh',
    codeName: 'Email - vicsingh305@gmail.com'
  }
]


