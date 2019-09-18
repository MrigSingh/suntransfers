import React from 'react';
import './body-cover.css';
import sky from '../../images/sky-cover.png';
import CoverToolbar from '../cover-toolbar/cover-toolbar';

class BodyCover extends React.Component{
    render(){
        return(<div>
            <div className="app-body">
                <div className="cover-container">
                    <img className="cover" alt="cover" src={sky} />
                    <h1 className="heading-primary">Reliable, low cost airport transfers</h1>
                    <h2 className="heading-secondary">Book a private transfer or shared shuttle at over 400 airports, stations and ports worldwide</h2>
                    <div className="app-toolbar">
                        <CoverToolbar />
                    </div>
                </div>
                <div className='main-body'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu sodales velit. Aenean at augue arcu. Sed fermentum dolor felis. Ut mattis urna non urna dapibus mattis eget sed urna. Suspendisse quam elit, eleifend vel blandit vel, cursus vitae lorem. Etiam justo sem, porta vitae dui vel, gravida viverra diam. Vestibulum dapibus urna justo, nec sodales ipsum venenatis sit amet. Fusce vulputate, risus id ultrices convallis, felis urna placerat ante, non molestie sem leo eget quam. Fusce feugiat ultrices tempor. Nam eu erat aliquam, varius nibh at, aliquam tortor. Proin interdum lorem ac turpis consectetur consequat. Nunc egestas massa egestas sem tincidunt tincidunt. Nam ex ipsum, ullamcorper id interdum nec, sagittis in nibh. Aenean neque nulla, viverra et lorem ut, volutpat elementum justo.Proin interdum id nibh eget gravida. Donec viverra pharetra arcu in suscipit. Aliquam erat volutpat. Maecenas et tellus non sapien rhoncus malesuada eget nec tellus. Nulla ornare mollis elementum. Donec placerat justo et ultricies tincidunt. Donec dignissim leo ante, sed dictum lacus molestie et. Fusce sit amet tristique mi, vel eleifend augue. Sed tempus efficitur eros, sed cursus risus faucibus eget. Proin urna nulla, bibendum euismod imperdiet sed, ornare tristique urna. Pellentesque hendrerit, mi euismod ornare consequat, mauris enim iaculis sem, et ultrices orci metus sit amet magna. Curabitur eget ex consequat, hendrerit mauris id, sollicitudin risus.
                    Phasellus vehicula nisi a ultrices varius. In at lectus eget ipsum porta tincidunt. Ut mollis pulvinar sollicitudin. Maecenas fermentum ex libero, sit amet eleifend purus blandit eget. Nunc cursus diam a risus ornare, ac lobortis massa sagittis. Duis mattis orci a placerat ullamcorper. Nunc in diam pellentesque, lobortis tortor quis, placerat mauris. Quisque justo nisl, pellentesque ac rhoncus ut, finibus nec eros. Nunc et lacinia purus. Aliquam euismod urna eu urna ornare scelerisque.Nulla ultricies est a leo pellentesque vestibulum. Aenean tempus est quis ullamcorper luctus. Duis faucibus felis ut lacus consectetur, in fringilla est eleifend. Etiam quis pulvinar eros. Mauris nulla orci, congue vitae interdum et, maximus sit amet eros. Proin non arcu auctor, ultricies dolor vitae, malesuada magna. Fusce gravida, arcu mattis iaculis euismod, sapien ipsum placerat nibh, et sagittis felis tortor eu diam. Morbi sagittis libero magna, eget pellentesque nibh faucibus vel.Mauris bibendum nec metus sit amet fringilla. Nulla gravida metus at pretium mollis. Nunc aliquam erat at justo tristique posuere. Ut viverra sem at consectetur volutpat. Nunc interdum sed mauris vel ultrices. Nam quis interdum tellus. Cras gravida eleifend sem sit amet bibendum.
                    </p>
                </div>
            </div>
        </div>)
    }
}
export default BodyCover;