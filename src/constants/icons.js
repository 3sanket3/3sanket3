const ICONS = {
  TWITTER: {
    path: 'M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z',
    viewBox: '0 0 26 28'
  },
  FACEBOOK: {
    path: 'M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z',
    viewBox: '0 0 16 28'
  },
  TELEGRAM: {
    path: 'M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z',
    viewBox: '0 0 28 28'
  },
  VKONTAKTE: {
    path: 'M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z',
    viewBox: '0 0 31 28'
  },
  GITHUB: {
    path: 'M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z',
    viewBox: '0 0 26 28'
  },
  EMAIL: {
    path: 'M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z',
    viewBox: '0 0 28 28'
  },
  RSS: {
    path: 'M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z',
    viewBox: '0 0 22 28'
  },
  RESUME: {
    path: 'M0.622222 -6.10352e-05C0.296426 -2.99241e-05 3.11111e-05 0.296375 0 0.622161V27.3777C0 27.6847 0.279471 27.999 0.622222 27.9999H20.5333C20.8591 27.9999 21.1555 27.7035 21.1555 27.3777V4.97771C21.1555 4.8153 21.0863 4.65441 20.9708 4.54021L16.6152 0.184661C16.501 0.0691705 16.3402 0.00118341 16.1778 -6.10352e-05H0.622222ZM1.24444 1.24438H15.5555V4.97771C15.5596 5.26651 15.7997 5.59931 16.1778 5.59994H19.9111V26.7555H1.24444V1.24438ZM16.8 2.1291L19.0264 4.35549H16.8V2.1291ZM10.5778 5.59994C9.38239 5.59994 8.39999 6.58233 8.39999 7.77771C8.39999 8.97309 9.38239 9.95549 10.5778 9.95549C11.7732 9.95549 12.7555 8.97309 12.7555 7.77771C12.7555 6.58233 11.7732 5.59994 10.5778 5.59994ZM10.5778 6.84438C11.1006 6.84438 11.5111 7.25489 11.5111 7.77771C11.5111 8.30053 11.1006 8.71104 10.5778 8.71104C10.0549 8.71104 9.64444 8.30053 9.64444 7.77771C9.64444 7.25489 10.0549 6.84438 10.5778 6.84438ZM10.5778 10.5777C9.67555 10.5777 8.5809 10.8227 7.64166 11.4041C6.70242 11.9856 5.91111 12.9851 5.91111 14.311C5.91112 14.4761 5.97667 14.6343 6.09336 14.751C6.21004 14.8677 6.3683 14.9333 6.53333 14.9333H14.6222C14.7872 14.9333 14.9455 14.8677 15.0622 14.751C15.1789 14.6343 15.2444 14.4761 15.2444 14.311C15.2444 12.9851 14.4531 11.9856 13.5139 11.4041C12.5746 10.8227 11.48 10.5777 10.5778 10.5777ZM10.5778 11.8222C11.2311 11.8222 12.1587 12.0341 12.8528 12.4638C13.3635 12.78 13.7481 13.1667 13.9125 13.6888H7.24303C7.40743 13.1667 7.79202 12.78 8.30277 12.4638C8.99686 12.0341 9.92444 11.8222 10.5778 11.8222ZM4.35555 16.7999C4.0119 16.7999 3.73333 17.0785 3.73333 17.4222C3.73333 17.7658 4.0119 18.0444 4.35555 18.0444H16.8C17.1436 18.0444 17.4222 17.7658 17.4222 17.4222C17.4222 17.0785 17.1436 16.7999 16.8 16.7999H4.35555ZM4.35555 19.9111C4.0119 19.9111 3.73333 20.1896 3.73333 20.5333C3.73333 20.8769 4.0119 21.1555 4.35555 21.1555H16.8C17.1436 21.1555 17.4222 20.8769 17.4222 20.5333C17.4222 20.1896 17.1436 19.9111 16.8 19.9111H4.35555ZM4.35555 23.0222C4.0119 23.0222 3.73333 23.3007 3.73333 23.6444C3.73333 23.988 4.0119 24.2666 4.35555 24.2666H16.8C17.1436 24.2666 17.4222 23.988 17.4222 23.6444C17.4222 23.3007 17.1436 23.0222 16.8 23.0222H4.35555Z',
    viewBox: '0 0 22 28'
  }

};

export default ICONS;
