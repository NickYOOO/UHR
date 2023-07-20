import { styled } from 'styled-components';

export const TargetInfo = styled.div`
  width: 150px;
  height: 100px;
`;

export const TargetImg = styled.img`
  object-fit: contain;
  width: 150px;
  /* height: 100px; */
`;

export const KakaoMapContainer = styled.div`
  width: 100%;
`
// function MyComponent() {
//   const elementRef = useRef<HTMLDivElement>(null)
  
//   // Start observing the element when the component is mounted
//   useEffect(() => {
//   const element = elementRef?.current;
  
//   if (!element) return;
  
//   const observer = new ResizeObserver(() => {
//   // 👉 Do something when the element is resized
//   });
  
//   observer.observe(element);
//   return () => {
//   // Cleanup the observer by unobserving all elements
//   observer.disconnect();
//   };
//   }, [])
  
//   // 👇 Assign the ref to the element you're observing
//   return <div ref={elementRef}>...</div>
//   }
