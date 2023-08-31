import { cn } from '@/lib/utils';
import Link from 'next/link';
import * as React from 'react';
import { ThemeSwitch } from './theme-switch';

export const NavBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn(
      'flex justify-between items-center w-full relative z-10',
      className
    )}
    {...props}
  >
    <Link href={'/'}>
      <svg
        width="153"
        height="32"
        viewBox="0 0 153 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary-900 dark:text-primary-50"
      >
        <path
          d="M60.36 15.606C60.36 16.912 60.1154 18.0307 59.6261 18.9618C59.1408 19.8891 58.4779 20.5993 57.6375 21.0925C56.801 21.5857 55.852 21.8323 54.7906 21.8323C53.7293 21.8323 52.7783 21.5857 51.9379 21.0925C51.1014 20.5954 50.4385 19.8832 49.9493 18.9559C49.4639 18.0247 49.2213 16.9081 49.2213 15.606C49.2213 14.3 49.4639 13.1834 49.9493 12.2561C50.4385 11.3249 51.1014 10.6127 51.9379 10.1195C52.7783 9.6263 53.7293 9.37969 54.7906 9.37969C55.852 9.37969 56.801 9.6263 57.6375 10.1195C58.4779 10.6127 59.1408 11.3249 59.6261 12.2561C60.1154 13.1834 60.36 14.3 60.36 15.606ZM58.1524 15.606C58.1524 14.6867 58.0084 13.9113 57.7203 13.28C57.4362 12.6448 57.0417 12.1654 56.5366 11.8418C56.0316 11.5143 55.4496 11.3506 54.7906 11.3506C54.1317 11.3506 53.5497 11.5143 53.0447 11.8418C52.5396 12.1654 52.1431 12.6448 51.855 13.28C51.5709 13.9113 51.4289 14.6867 51.4289 15.606C51.4289 16.5254 51.5709 17.3027 51.855 17.9379C52.1431 18.5692 52.5396 19.0486 53.0447 19.3761C53.5497 19.6997 54.1317 19.8615 54.7906 19.8615C55.4496 19.8615 56.0316 19.6997 56.5366 19.3761C57.0417 19.0486 57.4362 18.5692 57.7203 17.9379C58.0084 17.3027 58.1524 16.5254 58.1524 15.606ZM62.3413 21.6666V12.5757H64.4187V14.0909H64.5134C64.6791 13.5661 64.9632 13.1617 65.3656 12.8776C65.772 12.5895 66.2357 12.4455 66.7565 12.4455C66.8749 12.4455 67.0071 12.4514 67.153 12.4633C67.303 12.4712 67.4273 12.485 67.5259 12.5047V14.4756C67.4352 14.444 67.2911 14.4164 67.0939 14.3927C66.9005 14.3651 66.7131 14.3513 66.5316 14.3513C66.141 14.3513 65.7898 14.4361 65.4781 14.6058C65.1703 14.7715 64.9277 15.0023 64.7501 15.2983C64.5725 15.5942 64.4838 15.9355 64.4838 16.3222V21.6666H62.3413ZM69.044 21.6666V9.54541H71.1865V14.079H71.2753C71.3858 13.8581 71.5417 13.6233 71.7429 13.3747C71.9441 13.1222 72.2164 12.9072 72.5596 12.7296C72.9029 12.5481 73.3409 12.4573 73.8736 12.4573C74.5759 12.4573 75.2092 12.6369 75.7734 12.9959C76.3416 13.351 76.7914 13.8778 77.1229 14.5762C77.4582 15.2706 77.6259 16.1229 77.6259 17.133C77.6259 18.1313 77.4622 18.9796 77.1347 19.678C76.8072 20.3764 76.3613 20.9091 75.7971 21.276C75.2329 21.643 74.5937 21.8264 73.8795 21.8264C73.3587 21.8264 72.9266 21.7396 72.5833 21.566C72.24 21.3924 71.9638 21.1833 71.7547 20.9386C71.5495 20.6901 71.3897 20.4553 71.2753 20.2343H71.151V21.6666H69.044ZM71.1451 17.1212C71.1451 17.7091 71.228 18.224 71.3937 18.6659C71.5634 19.1078 71.806 19.4531 72.1217 19.7017C72.4413 19.9463 72.828 20.0686 73.2817 20.0686C73.7552 20.0686 74.1517 19.9424 74.4713 19.6898C74.7909 19.4334 75.0316 19.0842 75.1934 18.6422C75.3591 18.1964 75.442 17.6894 75.442 17.1212C75.442 16.5569 75.3611 16.0558 75.1993 15.6179C75.0376 15.1799 74.7969 14.8366 74.4773 14.588C74.1577 14.3394 73.7591 14.2152 73.2817 14.2152C72.824 14.2152 72.4354 14.3355 72.1158 14.5762C71.7962 14.8169 71.5535 15.1542 71.3878 15.5883C71.226 16.0223 71.1451 16.5333 71.1451 17.1212ZM79.4474 21.6666V12.5757H81.5899V21.6666H79.4474ZM80.5246 11.2855C80.1852 11.2855 79.8932 11.173 79.6486 10.9481C79.404 10.7193 79.2817 10.445 79.2817 10.1254C79.2817 9.80188 79.404 9.52766 79.6486 9.30275C79.8932 9.0739 80.1852 8.95947 80.5246 8.95947C80.8678 8.95947 81.1598 9.0739 81.4005 9.30275C81.6451 9.52766 81.7675 9.80188 81.7675 10.1254C81.7675 10.445 81.6451 10.7193 81.4005 10.9481C81.1598 11.173 80.8678 11.2855 80.5246 11.2855ZM88.3326 12.5757V14.2329H83.1065V12.5757H88.3326ZM84.3968 10.3977H86.5393V18.9323C86.5393 19.2203 86.5827 19.4412 86.6695 19.5951C86.7603 19.7451 86.8786 19.8477 87.0246 19.9029C87.1706 19.9581 87.3324 19.9858 87.5099 19.9858C87.6441 19.9858 87.7664 19.9759 87.8769 19.9562C87.9913 19.9364 88.0781 19.9187 88.1373 19.9029L88.4983 21.5778C88.3839 21.6173 88.2202 21.6607 88.0071 21.7081C87.798 21.7554 87.5415 21.783 87.2377 21.7909C86.7011 21.8067 86.2177 21.7258 85.7876 21.5483C85.3576 21.3668 85.0162 21.0866 84.7637 20.7078C84.5151 20.329 84.3928 19.8555 84.3968 19.2874V10.3977ZM102.474 13.4162C102.375 13.0965 102.239 12.8105 102.065 12.558C101.895 12.3015 101.69 12.0825 101.45 11.901C101.213 11.7195 100.941 11.5834 100.633 11.4926C100.325 11.3979 99.9897 11.3506 99.6267 11.3506C98.9757 11.3506 98.3956 11.5143 97.8867 11.8418C97.3777 12.1693 96.9772 12.6507 96.6852 13.2859C96.3971 13.9173 96.2531 14.6867 96.2531 15.5942C96.2531 16.5096 96.3971 17.2849 96.6852 17.9202C96.9732 18.5554 97.3737 19.0388 97.8867 19.3702C98.3996 19.6977 98.9954 19.8615 99.6741 19.8615C100.29 19.8615 100.822 19.7431 101.272 19.5064C101.726 19.2696 102.075 18.9342 102.32 18.5002C102.564 18.0622 102.687 17.5493 102.687 16.9614L103.184 17.0383H99.893V15.3219H104.811V16.7779C104.811 17.8156 104.59 18.7133 104.148 19.4708C103.707 20.2284 103.099 20.8124 102.326 21.2227C101.552 21.6291 100.664 21.8323 99.6622 21.8323C98.5456 21.8323 97.5651 21.5818 96.7207 21.0807C95.8803 20.5756 95.2233 19.8595 94.7498 18.9323C94.2803 18.0011 94.0455 16.8963 94.0455 15.6179C94.0455 14.6393 94.1836 13.7653 94.4598 12.9959C94.74 12.2265 95.1306 11.5735 95.6317 11.0369C96.1328 10.4963 96.7207 10.086 97.3954 9.80583C98.0701 9.52174 98.804 9.37969 99.5971 9.37969C100.268 9.37969 100.893 9.47833 101.473 9.67562C102.053 9.86896 102.568 10.1452 103.018 10.5042C103.472 10.8633 103.845 11.2894 104.137 11.7826C104.429 12.2758 104.62 12.8203 104.711 13.4162H102.474ZM106.84 21.6666V12.5757H108.917V14.0909H109.012C109.178 13.5661 109.462 13.1617 109.864 12.8776C110.271 12.5895 110.734 12.4455 111.255 12.4455C111.374 12.4455 111.506 12.4514 111.652 12.4633C111.802 12.4712 111.926 12.485 112.025 12.5047V14.4756C111.934 14.444 111.79 14.4164 111.593 14.3927C111.399 14.3651 111.212 14.3513 111.03 14.3513C110.64 14.3513 110.289 14.4361 109.977 14.6058C109.669 14.7715 109.426 15.0023 109.249 15.2983C109.071 15.5942 108.982 15.9355 108.982 16.3222V21.6666H106.84ZM117.039 21.8442C116.151 21.8442 115.382 21.6489 114.731 21.2582C114.08 20.8676 113.575 20.3211 113.216 19.6188C112.861 18.9165 112.683 18.0958 112.683 17.1567C112.683 16.2176 112.861 15.3949 113.216 14.6886C113.575 13.9824 114.08 13.4339 114.731 13.0433C115.382 12.6527 116.151 12.4573 117.039 12.4573C117.927 12.4573 118.696 12.6527 119.347 13.0433C119.998 13.4339 120.501 13.9824 120.857 14.6886C121.216 15.3949 121.395 16.2176 121.395 17.1567C121.395 18.0958 121.216 18.9165 120.857 19.6188C120.501 20.3211 119.998 20.8676 119.347 21.2582C118.696 21.6489 117.927 21.8442 117.039 21.8442ZM117.051 20.1278C117.532 20.1278 117.935 19.9956 118.258 19.7313C118.582 19.4629 118.823 19.1039 118.98 18.6541C119.142 18.2043 119.223 17.7032 119.223 17.1508C119.223 16.5944 119.142 16.0913 118.98 15.6415C118.823 15.1878 118.582 14.8267 118.258 14.5584C117.935 14.2901 117.532 14.156 117.051 14.156C116.558 14.156 116.147 14.2901 115.82 14.5584C115.496 14.8267 115.254 15.1878 115.092 15.6415C114.934 16.0913 114.855 16.5944 114.855 17.1508C114.855 17.7032 114.934 18.2043 115.092 18.6541C115.254 19.1039 115.496 19.4629 115.82 19.7313C116.147 19.9956 116.558 20.1278 117.051 20.1278ZM124.829 21.6666L122.261 12.5757H124.445L126.043 18.9678H126.126L127.759 12.5757H129.919L131.553 18.9323H131.642L133.216 12.5757H135.406L132.831 21.6666H130.6L128.895 15.5232H128.771L127.067 21.6666H124.829ZM141.441 12.5757V14.2329H136.215V12.5757H141.441ZM137.506 10.3977H139.648V18.9323C139.648 19.2203 139.691 19.4412 139.778 19.5951C139.869 19.7451 139.987 19.8477 140.133 19.9029C140.279 19.9581 140.441 19.9858 140.619 19.9858C140.753 19.9858 140.875 19.9759 140.986 19.9562C141.1 19.9364 141.187 19.9187 141.246 19.9029L141.607 21.5778C141.493 21.6173 141.329 21.6607 141.116 21.7081C140.907 21.7554 140.65 21.783 140.346 21.7909C139.81 21.8067 139.326 21.7258 138.896 21.5483C138.466 21.3668 138.125 21.0866 137.872 20.7078C137.624 20.329 137.502 19.8555 137.506 19.2874V10.3977ZM145.571 16.3399V21.6666H143.429V9.54541H145.524V14.1205H145.63C145.843 13.6075 146.173 13.2031 146.619 12.9072C147.068 12.6073 147.641 12.4573 148.335 12.4573C148.966 12.4573 149.517 12.5895 149.986 12.8539C150.456 13.1182 150.819 13.5049 151.075 14.0139C151.336 14.5229 151.466 15.1444 151.466 15.8783V21.6666H149.323V16.2097C149.323 15.5981 149.166 15.1227 148.85 14.7833C148.538 14.4401 148.1 14.2684 147.536 14.2684C147.157 14.2684 146.818 14.3513 146.518 14.517C146.222 14.6788 145.989 14.9135 145.82 15.2213C145.654 15.5291 145.571 15.9019 145.571 16.3399Z"
          fill="currentColor"
        />
        <circle
          cx="16"
          cy="16"
          r="14.4"
          stroke="currentColor"
          strokeWidth="3.2"
        />
        <path
          d="M32 16C32 24.8366 24.8366 32 16 32V16H0C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z"
          fill="currentColor"
        />
      </svg>
    </Link>
    <ThemeSwitch />
  </nav>
));
NavBar.displayName = 'NavBar';
